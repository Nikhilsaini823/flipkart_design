import React from 'react'
import { Link } from 'react-router-dom'
import Sliders from '../sliders/Sliders'
import './Homepagemenu.css'

function Homepagemenu() {
  return (
    <>
      <div >
        <ul className='home-menu'>
          <li className='item'><img className='itemimg' src='/images/grocery.jpg' alt="..." /><Link to="#" className=" itemLink">Grocery</Link></li>
          <li className='item'><img className='itemimg' src='/images/mobile.jpg' alt="..." /><Link to="#" className="itemLink">Mobiles</Link></li>
          <li className='item'><img className='itemimg' src='/images/fashion.jpg' alt="..." />
            <Link to="#" className="itemLink">Fashion 
              <svg xmlns="http://www.w3.org/2000/svg"  width="10" height="10" fill="currentColor" className="bi bi-chevron-up mx-2 "   viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
              </svg>
            </Link>
            <div className='submenu'>
              <Link className='Loginmenu' to="/"> Men's Top Wear</Link><br></br>
              <Link to="/" className='Loginmenu'> Men's Bottom Wear</Link><br></br>
              <Link to="/" className='Loginmenu'>Women Ethnic</Link> <br></br>
              <Link to="/" className='Loginmenu'>Women Western</Link><br></br>
              <Link to="/" className='Loginmenu'>Men Footwear</Link><br></br>
              <Link to="/" className='Loginmenu'>Watches and Accessories</Link><br></br>
              <Link to="/" className='Loginmenu'>Bag, Suitcase & Luggage</Link><br></br>
              <Link to="/" className='Loginmenu'>Kids</Link><br></br>
            </div>
          </li>
          <li className='item'><img className='itemimg' src='/images/electronic.jpg' alt="..." />
            <Link to="#" className="itemLink">Electronics 
              <svg xmlns="http://www.w3.org/2000/svg"  width="10" height="10" fill="currentColor" className="bi bi-chevron-up mx-2 "   viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
              </svg></Link>
            <div className='submenu'>
              <Link className='Loginmenu' to="/"> Audio</Link><br></br>
              <Link to="/" className='Loginmenu'>Smart Home Automatic</Link><br></br>
              <Link to="/" className='Loginmenu'>Mobile</Link> <br></br>
              <Link to="/" className='Loginmenu'>Gaming</Link><br></br>
              <Link to="/" className='Loginmenu'>Cameras</Link><br></br>
              <Link to="/" className='Loginmenu'>Computers</Link><br></br>
              <Link to="/" className='Loginmenu'>Laptop</Link><br></br>
              <Link to="/" className='Loginmenu'>More</Link><br></br>
            </div>
          </li>
          <li className='item'><img className='itemimg' src='/images/home.jpg' alt="..." />
            <Link to="#" className="itemLink">Home 
              <svg xmlns="http://www.w3.org/2000/svg"  width="10" height="10" fill="currentColor" className="bi bi-chevron-up mx-2 "   viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
              </svg>
            </Link>
            <div className='submenu'>
              <Link className='Loginmenu' to="/"> Home Frunishings</Link><br></br>
              <Link to="/" className='Loginmenu'>Furniture Studio</Link><br></br>
              <Link to="/" className='Loginmenu'>Living Room Furniture</Link> <br></br>
              <Link to="/" className='Loginmenu'>Kitchen</Link><br></br>
              <Link to="/" className='Loginmenu'>Bedroom Furniture</Link><br></br>
              <Link to="/" className='Loginmenu'>Home Decore</Link><br></br>
              <Link to="/" className='Loginmenu'>Tools & Utility</Link><br></br>
              <Link to="/" className='Loginmenu'>Cleaning & Bath</Link><br></br>
            </div>
          </li>
          <li className='item'><img className='itemimg' src='/images/appliances.jpg' alt="..." /><Link to="#" className="itemLink">Appliances</Link></li>
          <li className='item'><img className='itemimg' src='/images/travel.jpg' alt="..." /><Link to="#" className="itemLink">Travel</Link></li>
          <li className='item'><img className='itemimg' src='/images/topoffers.jpg' alt="..." /><Link to="#" className="itemLink">Top Offers</Link></li>
          <li className='item'><img className='itemimg' src='/images/toyandmore.jpg' alt="..." />
          <Link to="#" className="itemLink">Beauty, Toys & More 
              <svg xmlns="http://www.w3.org/2000/svg"  width="10" height="10" fill="currentColor" className="bi bi-chevron-up mx-2 "   viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
              </svg>
          </Link>
          <div className='submenu'>
              <Link className='Loginmenu' to="/"> Beauty and Personal Care</Link><br></br>
              <Link to="/" className='Loginmenu'>Food and Drinks</Link><br></br>
              <Link to="/" className='Loginmenu'>Baby Care </Link> <br></br>
              <Link to="/" className='Loginmenu'>Books</Link><br></br>
              <Link to="/" className='Loginmenu'>Music</Link><br></br>
              <Link to="/" className='Loginmenu'>Stationery Store</Link><br></br>
              <Link to="/" className='Loginmenu'>Health Care</Link><br></br>
              <Link to="/" className='Loginmenu'>Toys</Link><br></br>
            </div>
          </li>
          <li className='item'><img className='itemimg' src='/images/twoweelers.jpg' alt="..." /><Link to="#" className="itemLink">Two Wheelers</Link></li>
        </ul>
      </div>
      <Sliders />
    </>
  )
}

export default Homepagemenu
