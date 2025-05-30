import express from "express"
import { getallproduct, getsingleproduct } from "../Controller/GetProduct.js";

const getproduct=express.Router();

getproduct.get("/getallproduct",getallproduct)
getproduct.get("/getsingleproduct/:id",getsingleproduct)

export default getproduct