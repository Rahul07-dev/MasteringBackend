import dotenv from "dotenv"
import connectDB from "./db/dbConnection.js"
import express from "express";
import {app} from "./app.js"

dotenv.config({
    path : './.env'
})
const PORT=process.env.PORT || 8000;

connectDB()
.then(()=>{
    app.on("error",(err)=>{
        console.log("Error while fetching.");
    })
})
.then(()=>{
     app.listen(PORT,()=>{
          console.log(`App is listening on port ${PORT}`);
     })
})
.catch((error)=>{
    console.log("MongoDB connection failed at index.js" ,error);
})
/*
import express from "express";
const app = express();
;( async ()=>{

     try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error)=>{
            console.log("Error:", error);
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
     }
     catch(error){
            console.error("Error: ", error );
            throw err;
     }


})() // a function that would run, just at the same time it got initialized.

*/
