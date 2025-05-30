import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function CardOne({image ,title,price, description}) {
  const navigate=useNavigate()

  const handlebuy=()=>{
    navigate("/customerdetails")

  }
  return (
    <div className="w-[50%] mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
      {/* Image */}
      <div className="h-62 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800 mb-1">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <p className="text-gray-600 text-sm mb-4">{price}</p>

        {/* Buttons */}
        <div className="flex justify-between">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition">
            Add to Cart
          </button>
          <button onClick={handlebuy} className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardOne;
