import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './pages/Hero'
import DetailTurbon from './pages/DetailTurbon'
import Punjabi from './pages/Allturbondetail/Punjabi'
import Rajsathani from './pages/Allturbondetail/Rajsathani'
import { View } from 'lucide-react'


function App() {


  return (
    <>
     
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/hero' element={<Hero/>}/>

         {/* //product detail */}
      <Route path="/product/1" element={<Rajsathani/>}/>
        <Route path="/product/2" element={<Punjabi/>}/>
          <Route path="/product/3" element={<DetailTurbon/>}/>
            <Route path="/punjabi/p" element={<Punjabi/>}/>
              <Route path="/product/5" element={<DetailTurbon/>}/>
                <Route path="/product/6" element={<DetailTurbon/>}/>


                {/* view product router */}

                <Route path="/product/:id" element={<View/>}/>
     </Routes>
     </BrowserRouter>

    </>
  )
}

export default App
