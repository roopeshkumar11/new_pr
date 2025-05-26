import express from  'express';
import dotenv from "dotenv"
import connectDb from './src/db.js';

const app=express();

dotenv.config({
    path:"./src/.env"
})



connectDb()
.then(()=>{
app.listen(process.env.PORT,()=>{
    console.log(`running port ${process.env.PORT}`)
})
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})
