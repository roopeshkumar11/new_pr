import express from  'express';
import dotenv from "dotenv"
import app from './src/app.js';
import connectDb from './src/db/index.js';




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
