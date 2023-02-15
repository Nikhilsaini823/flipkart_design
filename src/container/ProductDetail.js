import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { addToCart, removeselectedProduct, selectedProduct } from "../redux/action/productAction";


function ProductDetail() {
  const product = useSelector((state) => state.product)
  const { id } = useParams();
  const { image, title, description, price, category } = product
  const dispatch = useDispatch();
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
    return () => {
      dispatch(removeselectedProduct());
    }
  }, [id])
  return (
    <>
      <div className="container ">
        {Object.keys(product).length === 0 ? (
          <div>Loarding.....</div>) : (
          <div className="row justify-content-center">
            <div className="col col-lg-6 mt-5">
              <div className="container text-center">
                {product.image &&
                  <img src={image} style={{ height: '300px', width: '350px' }} />
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
        <div style={{ marginLeft: "500px" }}>
          <input id="form1" min="0" name="quantity" defaultValue="1" type="number" className="form-group col-md-1 mx-1" />
          <button to="#" className=" btn btn-primary" onClick={() => dispatch(addToCart({ product }))}>ADD TO CART</button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;