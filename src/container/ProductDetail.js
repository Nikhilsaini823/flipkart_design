import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { removeselectedProduct, selectedProduct } from "../redux/action/productAction";


function ProductDetail() {
    const product = useSelector((state) => state.product)
    const { id } = useParams();
    const {image, title, description, price, category}= product
    const dispatch = useDispatch();
    console.log(product)
    const fetchProductDetails = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .catch((err) => {
                console.log("err", err)
            });
        dispatch(selectedProduct(response.data))
    };
    useEffect(() => {
        if (id && id !== "") fetchProductDetails();
        return ()=>{
            dispatch(removeselectedProduct());
        }
    }, [id])
    console.log("id",id)
    return (
        <>
          <div className="container ">
          {Object.keys(product).length === 0 ?(
                <div>Loarding.....</div>):(
            <div className="row justify-content-center">
              <div className="col col-lg-6 mt-5">
                <div className="container text-center">
                  {product.image &&
                    <img src={image} style={{height: '300px',width: '350px'}}/>
                  }
                  <h1>{title}</h1>
                </div>
                <table className="table table-hover">
                  <tbody>
                    <tr>
                      <th scope="row">Price</th>
                      <td>{price} $</td>
                    </tr>
                    <tr>
                      <th scope="row">Description</th>
                      <td>{description}</td>
                    </tr>
                    <tr>
                      <th scope="row">Category</th>
                      <td>{category}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            )}
            <Link to="#" style={{marginLeft:"500px"}} className="btn btn-primary">ADD TO CART</Link>
          </div>
        </>
    );
};

export default ProductDetail;