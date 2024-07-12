import { MongoClient, ServerApiVersion } from "mongodb";

let db;
const uri = `mongodb+srv://${process.env.NEXT_DB_USER}:${process.env.NEXT_DB_PASS}@cluster0.k4th77t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

export const ConnectDB = async () => {
  if (db) {
    return db;
  }

  try {
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
      },
    });

    await client.connect();
    db = client.db("easyfood");
    console.log("Successfully connected to the database");
    return db;
  } catch (error) {
    console.log("Failed to connect to the database", error);
    throw error;
  }
};
