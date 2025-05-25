import React from 'react';
import Card from "../../components/Card"

const rajasthaniProducts = [
  {
    id: 10,
    title: "Rajasthani Leheriya Safa",
    description: "Traditional Rajasthani turban with vibrant Leheriya pattern.",
    image: "/tb1.jpg",
    price: "$35.00",

  },
  {
    id: 5,
    title: "Bandhani Safa",
    description: "Colorful tie-dye style from Gujarat, popular in weddings.",
    image: "/tb2.jpg",
    price: "$39.99",
  
  },
  {
    id: 8,
    title: "Jaipuri Royal Pagdi",
    description: "Cylindrical Jaipuri turban worn during royal functions.",
    image: "/tb5m.jpg",
    price: "$45.99",
 
  },
  {
    id: 13,
    title: "Sirohi Rajwadi Pagdi",
    description: "Elegant traditional Rajasthani pagdi from the Sirohi region, known for royal heritage.",
    image: "/tb7.jpg",
    price: "$48.99",

  },
  {
    id: 14,
    title: "Mewar Rajputana Safa",
    description: "Worn by Rajputs of Mewar, this saffron-colored turban signifies valor and pride.",
    image: "/tb8.jpg",
    price: "$51.00",
 
  },
  {
    id: 15,
    title: "Shekhawati Floral Pagdi",
    description: "Lightweight floral turban used in Shekhawati region weddings and ceremonies.",
    image: "/tb9.jpg",
    price: "$42.50",

  },
  {
    id: 16,
    title: "Jodhpuri Safa with Kalgi",
    description: "Royal Jodhpuri safa with ornamental kalgi, perfect for grand Rajasthani weddings.",
    image: "/tb10.jpg",
    price: "$57.00",
  
  }
];


function Rajsathani() {
  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <h1 className="text-4xl text-green-400 text-center font-bold mb-10">Turbon Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {rajasthaniProducts.map(product => (
          <Card
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            buttonText={`Buy for ${product.price}`}
            onClick={() => alert(`You selected ${product.title}`)}
            // link={product.link}
            link={`/product/p/${product.id}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Rajsathani;
