

import { User } from "../Models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

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

  const token=jwt.sign(
    {userId:newUser._id,phone:newUser.phone},
    process.env.JWT_SECRET,
    {expiresIn:"1h"}
  )
    return res.status(201).json({ message: "User registered", token,user: {
        id: newUser._id,
        username: newUser.username,
        phone: newUser.phone
      } });
    
  } catch (error) {

    console.log("Server error",error);
    return res.status(500).json({error: "Server error"})
    
  }
};


// export const Printdata=async()=>{
//   const ans=await User.find();

//   console.log(ans);
//   return res.json({ans:{

//   }})
// }



export const Printdata = async (req, res) => {
  try {
    const ans = await User.find();  
             
    
 
    return res.json({ ans });     
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error while fetching users" });
  }
};



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
 const token=jwt.sign(
    {userId:existingUser._id,phone:existingUser.phone},
    process.env.JWT_SECRET,
    {expiresIn:"1h"}
  )
res.status(200).json({ message: "Login successful",token,user:{id:existingUser._id,phone:existingUser.phone}});

  } catch (error) {
    console.log("Server" ,error)
    return res.status(500).json({ error: "Login failed due to server error" });

    
  }

 
}