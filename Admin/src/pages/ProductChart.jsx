

import React from "react";
import {
  LineChart, Line,
  BarChart, Bar,
  XAxis, YAxis,
  Tooltip, CartesianGrid,
  Legend, ResponsiveContainer
} from "recharts";

const lineData = [
  { date: "2023-05-01", price: 400 },
  { date: "2023-05-02", price: 420 },
  { date: "2023-05-03", price: 450 },
  { date: "2023-05-04", price: 430 },
  { date: "2023-05-05", price: 480 },
  { date: "2023-05-06", price: 500 },
];

const barData = [
  { name: "Product A", sales: 2400 },
  { name: "Product B", sales: 1398 },
  { name: "Product C", sales: 9800 },
  { name: "Product D", sales: 3908 },
  { name: "Product E", sales: 4800 },
];

export default function ProductChart() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-around",
      padding: 20,
      gap: 40,
      background: "#f0f2f5",
      minHeight: "450px"
    }}>
      {/* Line chart for Trading/Stock price */}
      <div style={{
        flex: 1,
        background: "white",
        padding: 20,
        borderRadius: 10,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}>
        <h3 style={{ textAlign: "center", marginBottom: 20 }}>Stock Price Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="price" stroke="#007bff" strokeWidth={3} dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar chart for Product sales */}
      <div style={{
        flex: 1,
        background: "white",
        padding: 20,
        borderRadius: 10,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}>
        <h3 style={{ textAlign: "center", marginBottom: 20 }}>Product Sales</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#28a745" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
