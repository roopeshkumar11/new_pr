


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../ContextApi/Authcontext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const [items, setItems] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const getCartItems = async () => {
      try {
        if (!user?.userId) return;

        const response = await axios.get(
          `https://new-pr.onrender.com/api/cartitem/usercart/${user.userId}`
        );

        if (response?.data?.singleitem) {
          setItems(response.data.singleitem);
          console.log(response.data.singleitem);
        }
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    getCartItems();
  }, [user]);

  const navigate=useNavigate();

  const handlerreomve=async(id)=>{
    try {
      const removeitem=await axios.delete(`https://new-pr.onrender.com/api/deletecart/removeitem/${id}`)
      if(removeitem.data.message){
        alert("Remove item from cart")
        navigate("/hero")

      }
      
    } catch (error) {
      alert("item Not remove")
      
    }
  }
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-700">🛒 Your Cart</h2>

      {items.length > 0 ? (
        <div className="space-y-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-white p-4 rounded-lg shadow"
            >
              <img
                src={item.product?.image || 'https://via.placeholder.com/150'}
                alt={item.product?.name || 'Product'}
                className="w-32 h-32 object-cover rounded-md border"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800">{item.product?.name}</h3>
                <p className="text-gray-600 mt-1">
                  <strong>Price:</strong> ₹{item.product?.price}
                </p>
                <p className="text-gray-600 mt-1">
                  <strong>Quantity:</strong> {item.quantity}
                </p>
              </div>
              <button  onClick={()=>{handlerreomve(item._id)}}className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Remove
</button>

            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No items in cart.</p>
      )}
    </div>
  );
}

export default Cart;
