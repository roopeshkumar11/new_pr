

import { User } from "../Models/User.model.js";
import bcrypt from "bcryptjs";


export const UserRegiter = async (req, res) => {
  
  try {
    const { username, phone, password } = req.body

  if(!username || !phone || !password){
      return res.status(400).json({ error: "Missing fields" });
  }


 

  const existingUser = await User.findOne({ phone });
    if (existingUser) {
      return res.status(409).json({ error: "Account already exists with this phone number" });
    }


    const hashpassword=await bcrypt.hash(password,10)
    const newUser = new User({ username, phone, password:hashpassword });

 
    await newUser.save();
    return res.status(201).json({ message: "User registered", data: { username, phone } });
    
  } catch (error) {

    console.log("Server error",error);
    return res.status(500).json({error: "Server error"})
    
  }
};


export const Printdata=async()=>{
  const ans=await User.find();
  console.log(ans);
}


export const loginUser=async(req,res)=>{

  try {
    const{phone,password}=req.body;
   const  existingUser= await User.findOne({phone});

   if(!existingUser){
    return res.status(409).json({ error: "Account Not exists with this phone number" });
   }
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

res.json({ message: "Login successful"});

  } catch (error) {
    console.log("Server" ,error)
    return res.status(500).json({ error: "Login failed due to server error" });

    
  }

 
}