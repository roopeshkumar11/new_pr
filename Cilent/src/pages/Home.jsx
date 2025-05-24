import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center text-green-400 px-4 py-10 sm:py-16">
      {/* Image */}
      <img
        src="/images.jpeg"
        alt="Turbon Collection"
        className="w-4/5 sm:w-2/3 md:w-1/2 lg:w-[35%] rounded-xl object-cover mb-8 shadow-2xl transition-transform duration-500 hover:scale-105"
      />

      {/* Text */}
      <div className="text-center mb-8 px-2">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 tracking-wide">
          Turbon Collection
        </h1>
        <p className="text-md sm:text-lg lg:text-xl text-green-300">
          Explore diverse Turbon style
        </p>
      </div>

      {/* Button */}
      <Link  to="/hero" className="bg-green-400 text-black font-semibold px-8 py-3 rounded-full shadow-md hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300">
        Enter
      </Link>
    </div>
  );
}

export default Home;
