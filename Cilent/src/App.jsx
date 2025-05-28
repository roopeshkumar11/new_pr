import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './pages/Hero'
import DetailTurbon from './pages/DetailTurbon'
import Punjabi from './pages/Allturbondetail/Punjabi'
import Rajsathani from './pages/Allturbondetail/Rajsathani'
import View from './pages/ViewProduct/View'
import Sign from './pages/Account/Sign'
import Login from './pages/Account/Login'
import UserList from './pages/UserList'
import PrivateRoute from './Routes/PrivateRoute'



function App() {


  return (
    <>
     
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/userlist' element={<UserList/>}/>
      <Route path='/hero' element={<Hero/>}/>

         {/* //product detail */}
      <Route path="/product/1" element={<PrivateRoute><Rajsathani/></PrivateRoute>}/>
        <Route path="/product/2" element={<Punjabi/>}/>
          <Route path="/product/3" element={<DetailTurbon/>}/>
            <Route path="/punjabi/p" element={<Punjabi/>}/>
              <Route path="/product/5" element={<DetailTurbon/>}/>
                <Route path="/product/6" element={<DetailTurbon/>}/>


                {/* view product router */}

                <Route path="/product/p/:id" element={<View/>}/>


                <Route path='/signin' element={<Sign/>}/>
                <Route path='/login' element={<Login/>}/>
     </Routes>
     </BrowserRouter>

    </>
  )
}

export default App
