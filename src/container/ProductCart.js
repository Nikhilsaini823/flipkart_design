import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function ProductCart() {
    const cart = useSelector((state) => state.addcart.cart)
    console.log('cart: ', cart)
    return (
        <div className="h-100" style={{backgroundColor: "#eee"}}>
            <div className="container h-100 py-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-10">

                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                        </div>
                        {Object.keys(cart).length === 0 ? (
                                <div>Product Cart is Empty</div>) : (
                        <div className="card rounded-3 mb-4">
                            {cart.map((product,index) => 
                            // console.log("product",product) 
                            (
                            <div className="card-body p-4" key={index}>
                                <div className="row d-flex justify-content-between align-items-center" >
                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                        <img
                                            src={product.product.image}
                                            className="img-fluid rounded-3" alt="Product Image"/>
                                    </div>
                                    <div className="col-md-3 col-lg-3 col-xl-3">
                                        <p className="lead fw-normal mb-2">{product.product.title}</p>
                                    </div>
                                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                        <button className="btn btn-link px-2">
                                            <i className="fas fa-minus"></i>
                                        </button>

                                        <input id="form1" min="0" name="quantity" defaultValue="1" type="number"
                                            className="form-control form-control-sm" />

                                        <button className="btn btn-link px-2">
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                        <h5 className="mb-0">${product.product.price}</h5>
                                    </div>
                                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                        <Link to="#!" className="text-danger"><i className="fas fa-trash fa-lg"></i></Link>
                                    </div>
                                </div>
                               
                            </div>
                             ))}
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCart
