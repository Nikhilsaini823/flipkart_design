import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepagemenu from './Home/HomePageMenu/Homepagemenu'
import PublicRoute from '../PublicRoute'
function Routers() {
    return (
        <BrowserRouter>
            <Routes>  
                <Route path="/" element={<PublicRoute component={Homepagemenu}/>} />  
            </Routes>
        </BrowserRouter>
      )
}

export default Routers;
