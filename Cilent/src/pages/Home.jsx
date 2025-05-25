import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-100 via-white to-gray-200 min-h-screen flex flex-col justify-center items-center px-6 py-12 sm:py-20">
      
      {/* Image Container */}
      <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mb-10 shadow-xl rounded-3xl overflow-hidden transform transition-transform duration-700 hover:scale-105">
        <img
          src="/images.jpeg"
          alt="Turbon Collection"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      {/* Text Content */}
      <div className="text-center max-w-xl px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-wide drop-shadow-md">
          Discover The <span className="text-green-500">Turbon Collection</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
          Experience the vibrant tradition and elegance of Rajasthani turbans.
          Explore unique styles and colors that celebrate cultural heritage.
        </p>

        {/* Enter Button */}
        <Link
          to="/hero"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-10 py-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-50"
        >
          Explore Now
        </Link>
      </div>

      {/* Footer or small note */}
      <p className="mt-16 text-sm text-gray-500 italic select-none">
        Crafted with passion by Turbon Enthusiasts
      </p>
    </div>
  );
}

export default Home;

// import React from 'react';
// import { Link } from 'react-router-dom';

// function Home() {
//   return (
//     <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center text-green-400 px-4 py-10 sm:py-16">
//       {/* Image */}
//       <img
//         src="/images.jpeg"
//         alt="Turbon Collection"
//         className="w-4/5 sm:w-2/3 md:w-1/2 lg:w-[35%] rounded-xl object-cover mb-8 shadow-2xl transition-transform duration-500 hover:scale-105"
//       />

//       {/* Text */}
//       <div className="text-center mb-8 px-2">
//         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 tracking-wide">
//           Turbon Collection
//         </h1>
//         <p className="text-md sm:text-lg lg:text-xl text-green-300">
//           Explore diverse Turbon style
//         </p>
//       </div>

//       {/* Button */}
//       <Link  to="/hero" className="bg-green-400 text-black font-semibold px-8 py-3 rounded-full shadow-md hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300">
//         Enter
//       </Link>
//     </div>
//   );
// }

// export default Home;     