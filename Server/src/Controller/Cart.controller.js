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

    console.log(cartItems.product)

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
