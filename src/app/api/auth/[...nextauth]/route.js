import { ConnectDB } from "@/Dbconnection/ConnectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email@example.com" },
        password: { label: "Password", type: "password", placeholder: "Password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        if (!email || !password) {
          console.log("Email or password not provided");
          return null;
        }

        try {
          const db = await ConnectDB();
          const currentUser = await db.collection('users').findOne({ email });

          if (!currentUser) {
            console.log("No user found with this email");
            return null;
          }

          const passwordMatch = bcrypt.compareSync(password, currentUser.password);

          if (!passwordMatch) {
            console.log("Password does not match");
            return null;
          }

          return { id: currentUser._id, name: currentUser.name, email: currentUser.email };
        } catch (error) {
          console.error("Authorization error", error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
