import React, { useEffect } from 'react'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/action/productAction';
import { Link } from 'react-router-dom';
import "./ProductList.css"

const ProductList = () => {
    const products = useSelector((state) => state.allproducts.products)
    const dispatch = useDispatch();
    const fatchProduct = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products/")
            .catch((err) => {
                console.log("err", err)
            });
        dispatch(setProducts(response.data))
    };
    useEffect(() => {
        fatchProduct();
    },[])
  
    return (
        <div className="album py-5 bg-light ">
            <div className="container">
                <h1>Product List :)</h1>
                {Object.keys(products).length === 0 ? (
                    <div>Loarding.....</div>) : (
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-3">
                        {products.map((data) => (
                            <div className="col" key={data.id}>
                                <div className="card shadow-sm">
                                    <img className="card-img-top imgheight" src={data.image} alt="Card image cap"  role="img" aria-label="place alt text here" title={data.price +" $ Shope Now"} />
                                    <div className="card-body">
                                        <p className="card-text">{data.price} $</p>
                                        <p className="card-text containerx">{data.title}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <Link type="button" to={`/productdetails/${data.id}`} className="btn btn-primary btn-lg px-4 gap-3">Show Details</Link>
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
