import React from 'react';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';

function AboutCompany() {
  return (
    <div className="mx-auto  bg-white p-8 rounded-lg shadow-md mt-10 max-w-4xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-700">About Our Company</h2>

      <p className="mb-4 text-gray-700">
        Our company specializes in selling authentic turbans representing the rich cultural heritage
        of various states across India. Each turban in our collection is carefully selected to ensure
        traditional craftsmanship, vibrant colors, and premium quality materials.
      </p>

      <p className="mb-4 text-gray-700">
        We offer turbans from Rajasthan, Punjab, Gujarat, Maharashtra, and many other regions, each
        reflecting the unique style and traditions of the state. Our turbans are perfect for weddings,
        cultural events, and daily wear, providing both elegance and comfort.
      </p>

      <p className="mb-4 text-gray-700">
        We take pride in verifying the authenticity and quality of every product before it reaches you,
        ensuring that you get only the best. Customer satisfaction and trust are our top priorities.
      </p>

      <hr className="my-6" />

      <h3 className="text-2xl font-semibold mb-3">Contact the Owner</h3>
      <p className="mb-4 flex items-center gap-2">
        <FaPhone className="text-green-600" /> 
        <a href="tel:8651775002" className="hover:underline text-green-600">8651775002</a>
      </p>
      <p className="mb-4 flex items-center gap-2">
        <FaEnvelope className="text-green-600" />
        <a href="mailto:roopeshkumarbxr2017@gmail.com" className="hover:underline text-green-600">
          roopeshkumarbxr2017@gmail.com
        </a>
      </p>

      <div className="flex gap-6 text-2xl">
        <a href="https://github.com/roopeshkumar11" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/roopeshkumar11/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default AboutCompany;
