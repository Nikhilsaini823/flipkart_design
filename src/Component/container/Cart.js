import React from 'react'
import { useSelector } from 'react-redux'


function Cart() {
    const cartItem = useSelector(state => state.product.cartItem)
    console.log("cartpage",cartItem)
  return (
    <>
    <div className='container' >
        <h1>Shopping Cart :)</h1>
        {cartItem?.map((item, index)=>(
        <div className='row mt-3' key={index}>
            <div className='col'>
                <img className='product-image' src={item.image} />
            </div>
            <div className='col'>
                <p>TITLE</p>
                <h2>{item.producttitle}</h2>
                <p>{item.price} </p>
                <button  className="btn btn-danger">Remove</button>
                <input id="form1" min="0" name="quantity" defaultValue="1" type="number" className="form-group col-md-1 ms-5 mx-1 " />
                <button  className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        ))}
    </div>
</>
  )
}

export default Cart
