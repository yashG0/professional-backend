import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
        if(conn){
            console.log("MONGODB DATABASE CONNECTED ",conn.connection.host);
        }
    } catch (error) {
        console.log("Your Mongodb connection failed ", error);
        process.exit(1);
    }
}

export default connectDB;