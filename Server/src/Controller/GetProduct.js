import { Addproduct } from "../Models/Admin/Addproduct.js"

export const getallproduct=async(req,res)=>{
   try {
     const product= await Addproduct.find();
     console.log(product)
     res.status(200).json({message:"all product",product:product})
   } catch (error) {
    res.status(404).json({message:"product not present",error});
   }
    
}


export const getsingleproduct=async(req,res)=>{

  try {
    const {id}=req.params;

const singleproduct=await Addproduct.findById(id);

if(!singleproduct){
  res.status(500).json({message:"product not find"})
}
 res.status(200).json({message:"product find successfully",singleproduct:singleproduct})

  } catch (error) {

     res.status(501).json({message:"Server error",error})
    
  }

}