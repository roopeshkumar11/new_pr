import express from "express";
import { deleteuser } from "../../Controller/admin/admin.controller.js";


const admindeleteuser=express.Router();

admindeleteuser.delete("/delete/:id",deleteuser);

export default admindeleteuser