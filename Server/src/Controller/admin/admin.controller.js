import { Addproduct } from "../../Models/Admin/Addproduct.js";
import { User } from "../../Models/User.model.js";

export const deleteuser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Deleting user with ID:", id);

    const response = await User.findByIdAndDelete(id);

    if (!response) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const addproduct=async(req,res)=>{
 try {
   const {name,price,description}=req.body;
  const image=req.file;


  
  if(!image){
    res.status(404).json({message:"Image not find"})
  }

   if(!name || !price || !description){
    res.status(404).json({message:"All data is requried"})
  }

  const newProduct=new Addproduct({
    name,
    price,
    description,
    image:image.path
  })

  await newProduct.save();
     res.status(201).json({ message: 'Product added successfully', product: newProduct });
 } catch (error) {
  res.status(500).json({ message: 'Server error', error: error.message });
 }
}
