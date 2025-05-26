
import cors from "cors"
import express from "express";

import RegisterRouter from "./Routes/User.route.js";

const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())




app.use("/api/user",RegisterRouter)

export default app;