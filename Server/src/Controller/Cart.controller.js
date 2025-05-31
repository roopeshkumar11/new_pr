import { Cart } from "../Models/Cart.model.js";

export const addtoCart=async(req,res)=>{

    try {
        const {userId,product,quantity}=req.bod;

        let item= await Cart.findOne({userId:userId,product:product});

        if(item){
            item.quantity+=quantity;
        }
        else{
             item=new Cart({
               user: userId,
              product:  product,
                quantity
            })
        }
        await item.save();
        res.status(201).json({message:"Add cart",item})
        
    } catch (error) {
        res.status(500).json({ message: 'Error adding to cart', error: err.message });
        
    }

    
}