import mongoose from "mongoose";

const CartSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
 product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Addproduct', 
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 1}
})

export const Cart=mongoose.model("Cart",CartSchema)