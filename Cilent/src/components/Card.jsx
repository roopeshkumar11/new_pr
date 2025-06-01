
import React from 'react';
import { Link } from 'react-router-dom';

function Card({ image, title, description, buttonText = "View" ,link}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 max-w-sm w-full">
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover rounded-t-2xl"
      />
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-900 mb-1">{title}</h2>
        <p className="text-gray-600 text-sm mb-3">{description}</p>

        {/* Buttons aligned left and right */}
        <div className="flex justify-between items-center mt-4">
          <button
          
            className="bg-green-400 text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-500 transition"
          >
            {buttonText}
          </button>

          <Link  to={link}
            className="text-green-600 hover:underline text-sm font-medium"
          >
            View More →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
