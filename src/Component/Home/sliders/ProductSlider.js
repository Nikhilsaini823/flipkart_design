import React from 'react'
import './ProductSlider.css'

function ProductSlider() {
  const productContainers = [...document.querySelectorAll('.product-container')];
  const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
  const preBtn = [...document.querySelectorAll('.pre-btn')];
  let data = [
    {
      'product_name': 'Brand shoes',
      'price': '20$',
      'description': "a short line about the Brand shoes and much morte detail about Brand shoes.",
      "image":'images/card1.jpg'
    },
    {
      'product_name': 'Brand shoes 2',
      'price': '50$',
      'description': "a short line about the Brand shoes 2 and much morte detail about Brand shoes 2.",
      "image":'images/card2.jpg'
    },
    {
      'product_name': 'Brand shoes 3',
      'price': '10$',
      'description': "a short line about the Brand shoes 3 and much morte detail about Brand shoes 3.",
      "image":'images/card3.jpg'
    },
    {
      'product_name': 'Brand shoes 4',
      'price': '30$',
      'description': "a short line about the Brand shoes 4 and much morte detail about Brand shoes 4.",
      "image":'images/card4.jpg'
    },
    {
      'product_name': 'Brand shoes 5',
      'price': '40$',
      'description': "a short line about the Brand shoes 5 and much morte detail about Brand shoes 5.",
      "image":'images/card5.jpg'
    },
    {
      'product_name': 'Brand shoes 6',
      'price': '60$',
      'description': "a short line about the Brand shoes 6 and much morte detail about Brand shoes 6.",
      "image":'images/card6.jpg'
    },
    {
      'product_name': 'Brand shoes 7',
      'price': '10$',
      'description': "a short line about the Brand shoes 7 and much morte detail about Brand shoes 7.",
      "image":'images/card7.jpg'
    },
  ]
  console.log("data", data)

  productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
      item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
      item.scrollLeft -= containerWidth;
    })
  })
  return (
    <>
      <div className='row'>
        <div className='column mt-2 ms-2  '>
          <img src="./images/headphones-laptop.jpg " className='sllider-img' alt="..." />
          <div className='top-left'><h1 className='text-size'>Best of <br /> Shoes</h1></div>
          <div className='top-left-btn'><a href="/" className="btn btn-primary" style={{marginLeft: '-23px', marginTop:'-69px'}}>VIEW ALL</a> </div>
        </div >
        <div className=" column mt-2 product" >
          <button className="pre-btn"><img src="images/arrow.png" alt="" /></button>
          <button className="nxt-btn"><img src="images/arrow.png" alt="" /></button>
          <div className="product-container">
          {data.map((product,index)=>(
            <div key={index} className="product-card">
              <div className="product-image" role="img" aria-label="place alt text here" title={product.price +" Shope Now"}>
                <img src={product.image} height="20" width='20' className="product-thumb" alt="...."  />
              </div>
              <div className="product-info">
                <h2 className="product-brand">{product.product_name}</h2>
                <span className="price">{product.price}</span>
                <p className="product-short-description">{product.description}</p>
              </div>
            </div>
             ))}
          </div>
        </div>
      </div>
    </>

  )
}

export default ProductSlider
