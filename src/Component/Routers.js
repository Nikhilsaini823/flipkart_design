import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepagemenu from './Home/HomePageMenu/Homepagemenu'
import PublicRoute from '../PublicRoute'
import reducer from '../redux/reducer'
import ProductDetail from '../container/ProductDetail'
function Routers() {
    return (
        <BrowserRouter>
            <Routes>  
                <Route path="/" element={<PublicRoute component={Homepagemenu}/>} />  
                <Route path="/" element={<PublicRoute redux={reducer}/>}/>
                <Route path="/productdetails/:id" element={<PublicRoute component={ProductDetail}/>}/>
            </Routes>
        </BrowserRouter>
      )
}

export default Routers;
