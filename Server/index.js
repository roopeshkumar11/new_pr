import express from  'express';

const app=express();

app.use("/",(req,res)=>{
    res.send("hello")
})

const port=8080;

app.listen(port,()=>{
    console.log(`running port ${port}`)
})