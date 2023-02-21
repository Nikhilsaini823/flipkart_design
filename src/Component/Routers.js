import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepagemenu from './Home/HomePageMenu/Homepagemenu'
import PublicRoute from '../PublicRoute'
import ProductDetail from './container/ProductDetail'
import Cart from './container/Cart'
function Routers() {
    return (
        <BrowserRouter>
            <Routes>  
                <Route path="/" element={<PublicRoute component={Homepagemenu}/>} />  
                <Route path="/productdetails/:id" element={<PublicRoute component={ProductDetail}/>}/>  
                <Route path="/cart" element={<PublicRoute component={Cart}/>} />
            </Routes>
        </BrowserRouter>
      )
}

export default Routers;
