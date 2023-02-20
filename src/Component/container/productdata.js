import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { productData } from '../../redux/action';
import "./Productdata.css"

const ProductList = () => {
    const {isLoading, product} = useSelector(state => state.product)
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(productData(product))
    },[])
    // console.log("Object.keys(product).length",Object.keys(product).length)
    // console.log("product",product)
  
    return (
        <div className="album py-5 bg-light ">
            <div className="container">
                <h1>Product List :)</h1>
                {isLoading ? (
                    <div>Loarding.....</div>) : (
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-3">
                        {product.length > 0 && product.map((data) => (
                            <div className="col" key={data.id}>
                                <div className="card shadow-sm">
                                    <img className="card-img-top imgheight" src={data.image} alt="Card image cap"  role="img" aria-label="place alt text here" title={data.price +" $ Shope Now"} />
                                    <div className="card-body">
                                        <p className="card-text">{data.price} $</p>
                                        <p className="card-text containerx">{data.title}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                            <Link type="button" to={`/productdetails/${data.id}`}  className="btn btn-primary btn-lg px-4 gap-3">Show Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                 )} 
            </div>
        </div>
    )
}

export default ProductList
