import React from 'react'
import Footer from './Component/Footer/Footer.js'
import Nevbar from './Component/Home/Nevbar/Nevbar.js'

const PublicRoute = ({ component: Component }) => { 
    return (
      <>
        <Nevbar/>
        <Component />
        <Footer/>
      </>
    )
  }

export default PublicRoute
