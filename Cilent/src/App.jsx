import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './pages/Hero'


function App() {


  return (
    <>
     
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/hero' element={<Hero/>}/>
     </Routes>
     </BrowserRouter>

    </>
  )
}

export default App
