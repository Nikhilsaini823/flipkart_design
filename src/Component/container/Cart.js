import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import "./Cart.css"
import { decrementQuantity, incrementQuantity, removeItem } from '../../redux/reducer'


function Cart() {
    const cartItem = useSelector(state => state.product.cartItem)
    console.log("cartItem",cartItem)
    const dispatch = useDispatch()
    
  return (
    <>
    <div className='container'>
        <h1>Shopping Cart :)</h1>
        {cartItem?.map((item, index)=>(
        <div className='row mt-3' key={index}>
            <div className='col'>
                <img className='product_img' src={item.image}/>
            </div>
            <div className='col'>
                {/* <p>Product Id: <strong>{item.id}</strong> </p> */}
                <p><strong>TITLE</strong></p>
                <h2>{item.title}</h2>
                <p>Price: <strong> {item.price} $</strong></p> <br></br>
                <button  onClick={() => dispatch(removeItem(item.id))} className="btn btn-danger">Remove</button>
                <button className='mx-1 mt-3' onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                <span className='mx-3'>{item.quantity}</span>
                <button className='mx-1' onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                <button  className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        ))}
    </div>
</>
  )
}

export default Cart
