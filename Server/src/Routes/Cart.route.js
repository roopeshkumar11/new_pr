import express from "express"
import { addtoCart } from "../Controller/Cart.controller.js";
const additemcart=express.Router();

additemcart.post("/addtocart",addtoCart);


export default additemcart;