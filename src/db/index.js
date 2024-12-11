import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
    try{
        const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected successfully to host: ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log("Error connecting to MongoDB", error);
        process.exit(1);
    }   
}