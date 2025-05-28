import React from 'react'
import { useParams } from 'react-router-dom';
import CardOne from '../../components/CardOne';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function View() {
    const { id } = useParams();
    console.log(id);
  return (
    <>

     <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
    

      <CardOne/>
      
     
    </div>
   
    </>
  )
}

export default View