import 'dotenv/config';
import express from 'express';
import connectDB from "./dbConfig/db.js";


const app = express();
const PORT = process.env.PORT || 3400;

// APPROACH 2 {good} ->
connectDB();

// APPROACH 1 {not good} ->
/*
(async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
        if(conn){
            console.log("Your Mongodb database has connected.");
            
        }
        app.on(("error"), (err) => {
            console.log("ERR: ", err);
            throw err
        })

        app.listen(PORT, () => {
            console.log(`Your application is running at http://localhost:${PORT}`);
        })

    } catch (error) {
        console.error("Failed to connect with mongodb database: ", error);
        throw error.message
    }
})()
*/