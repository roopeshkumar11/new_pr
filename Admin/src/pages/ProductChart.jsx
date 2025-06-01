

// import React from "react";
// import {
//   LineChart, Line,
//   BarChart, Bar,
//   XAxis, YAxis,
//   Tooltip, CartesianGrid,
//   Legend, ResponsiveContainer
// } from "recharts";

// const lineData = [
//   { date: "2023-05-01", price: 400 },
//   { date: "2023-05-02", price: 420 },
//   { date: "2023-05-03", price: 450 },
//   { date: "2023-05-04", price: 430 },
//   { date: "2023-05-05", price: 480 },
//   { date: "2023-05-06", price: 500 },
// ];

// const barData = [
//   { name: "Product A", sales: 2400 },
//   { name: "Product B", sales: 1398 },
//   { name: "Product C", sales: 9800 },
//   { name: "Product D", sales: 3908 },
//   { name: "Product E", sales: 4800 },
// ];

// export default function ProductChart() {
//   return (
//     <div style={{
//       display: "flex",
//       justifyContent: "space-around",
//       padding: 20,
//       gap: 40,
//       background: "#f0f2f5",
//       minHeight: "450px"
//     }}>
//       {/* Line chart for Trading/Stock price */}
//       <div style={{
//         flex: 1,
//         background: "white",
//         padding: 20,
//         borderRadius: 10,
//         boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
//       }}>
//         <h3 style={{ textAlign: "center", marginBottom: 20 }}>Stock Price Over Time</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={lineData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="date" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="price" stroke="#007bff" strokeWidth={3} dot={{ r: 5 }} />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Bar chart for Product sales */}
//       <div style={{
//         flex: 1,
//         background: "white",
//         padding: 20,
//         borderRadius: 10,
//         boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
//       }}>
//         <h3 style={{ textAlign: "center", marginBottom: 20 }}>Product Sales</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={barData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="sales" fill="#28a745" barSize={40} />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import axios from 'axios';

function Addproduct() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: ''
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', product.name);
      formData.append('price', product.price);
      formData.append('description', product.description);
      formData.append('image', image);

      const res = await axios.post('https://new-pr.onrender.com/api/admin/add/addproduct', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert(`Product added successfully: ${res.data.message}`);
      setProduct({ name: '', price: '', description: '' });
      setImage(null);
    } catch (err) {
      const errorMsg = err.response?.data?.message || err.message;
      alert(`Error adding product: ${errorMsg}`);
    }
  };

  return (
    <div className="p-4 md:ml-64 mt-10"> {/* Sidebar margin on md+ screens */}
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
          <div>
            <label className="block text-sm font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter product name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter price"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter product description"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Product Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default Addproduct;
