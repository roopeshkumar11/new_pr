import express from "express"
import { Printdata, UserRegiter } from "../Controller/User.controller.js";


const RegisterRouter=express.Router();

RegisterRouter.post("/userregister",UserRegiter);
RegisterRouter.get("/get",Printdata);
export default RegisterRouter;