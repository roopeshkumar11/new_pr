import express from "express"
import { loginUser, Printdata, UserRegiter } from "../Controller/User.controller.js";


const RegisterRouter=express.Router();

RegisterRouter.post("/userregister",UserRegiter);
RegisterRouter.get("/get",Printdata);
RegisterRouter.post("/userlogin",loginUser);
export default RegisterRouter;