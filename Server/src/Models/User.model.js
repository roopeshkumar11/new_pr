import mongoose from "mongoose";


const UserSchema=mongoose.Schema({
    Username:{
        type:String,
        required:true
    },
    Phone:{
         type:Number,
         required:true
    },
    Password:{
        required:true
    }
})


export const User=mongoose.model("User",UserSchema)