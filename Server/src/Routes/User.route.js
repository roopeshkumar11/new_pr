import express from "express"
import { UserRegiter } from "../Controller/User.controller.js";


const RegisterRouter=express.Router();

RegisterRouter.post("/userregister",UserRegiter);
export default RegisterRouter;