import mongoose from "mongoose";

const AddproductScehma=new mongoose.Schema({

name:{
    type:String,
    required:true,

},

price:{
     type:String,
    required:true,

},
 description:{
     type:String,
    required:true,
 },
 image:{
       type:String,
    required:true,
 }
},{timestamps:true})



export const Addproduct=mongoose.model("Addproduct",AddproductScehma)