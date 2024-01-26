import express from "express";
// import cookieParser from "cookie-parser";
import cors from "cors";


const app =express();
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials: true
})) // we can write options inside it.

app.use(express.json({
    limit : "16kb"
}))  //accepts json files in the uploading time or requests from server.


app.use(express.urlencoded({extended: true,
    limit : "16kb"
}))

//extended means that we can get nested objects
// but why urlencoded , it is because we have urls with special characters that we want to encode.

app.use(express.static("public"))
//images,pdf,fevicon in this public file.




export {app};