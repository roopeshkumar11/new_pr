import cors from "cors"
import express from "express";
import RegisterRouter from "./Routes/User.route.js";

const app=express();
app.use(cors())

app.use(express.json());


app.use("/api/user",RegisterRouter)

export default app;