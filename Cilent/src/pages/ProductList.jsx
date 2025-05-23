import React from 'react';
import Card from '../components/Card';

const products = [
  {
    id: 1,
    title: "Rajasthani Leheriya Safa",
    description: "Traditional Rajasthani turban with vibrant Leheriya pattern.",
     image: "/tb1.jpg",
    price: "$35.00"
  },
  {
    id: 2,
    title: "Groom's Velvet Wedding Turban",
    description: "Luxurious velvet turban with gold kalgi for royal weddings.",
    image: "/tb2.jpg",
    price: "$59.99"
  },
  {
    id: 3,
    title: "Maharashtrian Pheta",
    description: "Puneri Pheta in saffron, worn during weddings and religious events.",
    image: "/tb5m.jpg",
    price: "$24.99"
  },
  {
    id: 4,
    title: "Punjabi Shahi Pag",
    description: "Tall and regal turban, often with kalgi, worn by Sikh grooms.",
    image: "/tb6p.jpg",
    price: "$44.99"
  },
  {
    id: 5,
    title: "Bandhani Safa",
    description: "Colorful tie-dye style from Gujarat, popular in weddings.",
    image: "/tb2.jpg",
    price: "$39.99"
  },
  {
    id: 6,
    title: "Pearl Sehra Turban",
    description: "Cream silk turban with hanging pearl sehra for North Indian grooms.",
    image: "/tb3.jpg",
    price: "$69.99"
  },
  {
    id: 7,
    title: "Floral Wedding Turban",
    description: "Lightweight turban with floral print for beach or garden weddings.",
    image: "/tb4.jpg",
    price: "$49.99"
  },
  {
    id: 8,
    title: "Jaipuri Royal Pagdi",
    description: "Cylindrical Jaipuri turban worn during royal functions.",
     image: "/tb5m.jpg",
    price: "$45.99"
  },
  {
    id: 9,
    title: "Velvet Maroon Turban",
    description: "Elegant deep maroon velvet turban with gold trim for grooms.",
       image: "/tb1.jpg",
    price: "$52.99"
  },
  {
    id: 10,
    title: "Coorgi Mande Tuni",
    description: "Side-wrap style turban from Coorg, worn during weddings.",
       image: "/tb1.jpg",
    price: "$29.99"
  },
  {
    id: 11,
    title: "Golden Peshawari Turban",
    description: "Glittering golden finish, used in Muslim and Pashtun-style weddings.",
   image: "/tb4.jpg",
    price: "$54.99"
  },
  {
    id: 12,
    title: "Dogra Style Turban",
    description: "Formal and tightly wrapped turban from Jammu region.",
   image: "/tb1.jpg",
    price: "$34.99"
  }
];


function ProductList() {
  return (
    <div className="bg-black min-h-screen p-6">
      <h1 className="text-4xl text-green-400 text-center font-bold mb-10">Turbon Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {products.map(product => (
          <Card
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            buttonText={`Buy for ${product.price}`}
            onClick={() => alert(`You selected ${product.title}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
