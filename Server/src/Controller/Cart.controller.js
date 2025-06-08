import { Cart } from "../Models/Cart.model.js";

export const addtoCart=async(req,res)=>{

    try {
        const {userId,product,quantity}=req.body;

        let item= await Cart.findOne({userId:userId,product:product});

        if(item){
            item.quantity+=quantity;
        }
        else{
             item=new Cart({
               userId: userId,
              product:  product,
            quantity
            })
        }
        await item.save();
        res.status(201).json({message:"Add cart",item})
        
    } catch (error) {
        res.status(500).json({ message: 'Error adding to cart', error: error.message });
        
    }

    
}



export const getusercart = async (req, res) => {
  try {
    const { id } = req.params;

    const cartItems = await Cart.find({ userId: id }).populate("product");

  

    res.status(200).json({
      message: "Cart items fetched successfully",
      singleitem: cartItems,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching cart items",
      error: error.message,
    });
  }
};

 export const  cartitemdelete=async(req,res)=>{
  try {

    const {id}=req.params;

    const findcartitem=await Cart.findByIdAndDelete(id);

    res.status(201).json({message:"item delete successfully",findcartitem:findcartitem})
    
  } catch (error) {
     res.status(500).json({
      message: "cart items not delete",
      error: error.message,
    });
    
  }
 }
