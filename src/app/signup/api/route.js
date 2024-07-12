import { ConnectDB } from "@/Dbconnection/ConnectDB";
import bcrypt from "bcryptjs";
export const POST=async(request)=>{
 const newUser=await request.json()
 try {
    const db=await ConnectDB()
    const userCollection= db.collection('users')
    const exist= await userCollection.findOne({email:newUser?.email})
    if(exist){
        return Response.json({message:'user exist'},{status:304})
    }

    const hashedPassword= bcrypt.hashSync(newUser?.password,14)
    const res=await userCollection.insertOne({...newUser,password:hashedPassword})
    return Response.json({message:'user created'},{status:200})

 } catch (error) {
    return Response.json({message:error.message,error},{status:500})

 }

}