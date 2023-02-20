import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepagemenu from './Home/HomePageMenu/Homepagemenu'
import PublicRoute from '../PublicRoute'
import ProductList from './container/productdata'
function Routers() {
    return (
        <BrowserRouter>
            <Routes>  
                <Route path="/" element={<PublicRoute component={Homepagemenu}/>} />  
                <Route path="/productdetails/:id" element={<PublicRoute component={ProductList}/>}/>  
            </Routes>
        </BrowserRouter>
      )
}

export default Routers;
