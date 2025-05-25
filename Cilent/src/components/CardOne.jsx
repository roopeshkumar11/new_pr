import React from 'react';

function CardOne() {
  return (
    <div className="w-[50%] mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
      {/* Image */}
      <div className="h-62 overflow-hidden">
        <img
          src="/your-image.jpg"
          alt="Turban"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800 mb-1">Title</h2>
        <p className="text-gray-600 text-sm mb-4">Description of the product goes here.</p>

        {/* Buttons */}
        <div className="flex justify-between">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition">
            Add to Cart
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardOne;
