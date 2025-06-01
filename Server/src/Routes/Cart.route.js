import express from "express"
import { addtoCart, cartitemdelete, getusercart } from "../Controller/Cart.controller.js";
const additemcart=express.Router();

additemcart.post("/addtocart",addtoCart);



const getcartuser=express.Router();
getcartuser.get("/usercart/:id",getusercart)


const cartitemdeleteRoute=express.Router();
cartitemdeleteRoute.delete("/removeitem/:id",cartitemdelete)

export {additemcart,getcartuser,cartitemdeleteRoute};