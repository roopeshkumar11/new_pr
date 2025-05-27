import express from "express"
import { loginUser, Printdata, UserRegiter } from "../Controller/User.controller.js";
import authMiddleware from "../Middleware/Auth.middleware.js";


const RegisterRouter=express.Router();

RegisterRouter.post("/userregister",UserRegiter);
RegisterRouter.get("/get",authMiddleware,Printdata);
RegisterRouter.post("/userlogin",loginUser);
export default RegisterRouter;