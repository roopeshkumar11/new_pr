import express from "express";
import { deleteuser, addproduct as addProductHandler } from "../../Controller/admin/admin.controller.js";
import { upload } from "../../Middleware/Cloudinary.js";

// Delete user router
const admindeleteuser = express.Router();
admindeleteuser.delete("/delete/:id", deleteuser);

// Add product router
const adminAddProduct = express.Router();
adminAddProduct.post("/addproduct", upload.single("image"), addProductHandler);

// Export both routers
export { admindeleteuser, adminAddProduct };
