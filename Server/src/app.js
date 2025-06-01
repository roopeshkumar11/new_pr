
import cors from "cors"
import express from "express";

import RegisterRouter from "./Routes/User.route.js";
import{ admindeleteuser ,adminAddProduct } from "./Routes/Admin/admin.js";
import getproduct from "./Routes/Getallproduct.route.js";
import { additemcart, cartitemdeleteRoute, getcartuser } from "./Routes/Cart.route.js";


const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())




app.use("/api/user",RegisterRouter)


app.use("/api/admin",admindeleteuser)
app.use("/api/admin/add",adminAddProduct)


app.use("/api/product",getproduct)



app.use("/api/cart",additemcart)
app.use("/api/cartitem",getcartuser)

app.use("/api/deletecart",cartitemdeleteRoute)

export default app;