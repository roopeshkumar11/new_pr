import { useState } from 'react'

import './App.css'
import DashboardLayout from './pages/DashboardLayout'
import Sidebar from './component/Sidebar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import UserList from './pages/UserList'
import Addproduct from './pages/Addproduct'
import Deleteuser from './pages/Deleteuser'
import ProductChart from './pages/ProductChart'


function App() {

  return (
    <>
  
<BrowserRouter>
<Routes>
  <Route path="" element={<DashboardLayout/>}>
  <Route path='/userlist' element={<UserList/>}/>
  <Route path='/addproduct' element={<Addproduct/>}/>
  <Route path='/dashboard' element={<ProductChart/>}/>

  </Route>
</Routes>
</BrowserRouter>

    </>
  )
}

export default App
