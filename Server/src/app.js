
import cors from "cors"
import express from "express";

import RegisterRouter from "./Routes/User.route.js";
import{ admindeleteuser ,adminAddProduct } from "./Routes/Admin/admin.js";

const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())




app.use("/api/user",RegisterRouter)
// admin

app.use("/api/admin",admindeleteuser)
app.use("/api/admin/add",adminAddProduct)

export default app;