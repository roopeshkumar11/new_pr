

import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card"


function Punjabi() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get("https://new-pr.onrender.com/api/product/getallproduct");
        setProduct(response.data.product);
        console.log(response.data.product)

        if (response) {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    getProduct();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <h1 className="text-4xl text-green-400 text-center font-bold mb-10">Turbon Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {product.map((productItem) => (
          <Card
            key={productItem.id}
            image={productItem.image}
            title={productItem.title}
            description={productItem.description}
            buttonText={`Buy for ${productItem.price}`}
            onClick={() => alert(`You selected ${productItem.title}`)}
            link={`/product/p/${productItem._id}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Punjabi;
