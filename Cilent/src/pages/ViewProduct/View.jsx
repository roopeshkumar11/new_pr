import React from 'react'
import { useParams } from 'react-router-dom';

function View() {
    const { id } = useParams();
    console.log(id);
  return (
    
  
     <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">Viewing Product ID: {id}</h1>
      {/* You can fetch and show product details here */}
    </div>
  )
}

export default View