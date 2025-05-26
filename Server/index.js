import express from  'express';
import dotenv from "dotenv"

const app=express();

dotenv.config({
    path:"./src/.env"
})





app.listen(process.env.PORT,()=>{
    console.log(`running port ${process.env.PORT}`)
})