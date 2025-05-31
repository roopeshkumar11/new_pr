import express from "express"
import { addtoCart, getusercart } from "../Controller/Cart.controller.js";
const additemcart=express.Router();

additemcart.post("/addtocart",addtoCart);



const getcartuser=express.Router();
getcartuser.get("/usercart/:id",getusercart)

export {additemcart,getcartuser};