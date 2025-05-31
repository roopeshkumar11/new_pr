import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CardOne from '../../components/CardOne';


function View() {
  const { id } = useParams();
  const [singleproduct, setSingleProduct] = useState({});

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/product/getsingleproduct/${id}`);
        if (response && response.data.singleproduct) {
          setSingleProduct(response.data.singleproduct);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    getSingleProduct();
  }, [id]);

  return (
    <>
   
      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
        {singleproduct ? (
          <CardOne 
            image={singleproduct.image}
            title={singleproduct.title}
            description={singleproduct.description}
            price={singleproduct.price}
            productId={singleproduct._id}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
   
    </>
  );
}

export default View;
