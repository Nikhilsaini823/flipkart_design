import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { singlePoroductDetail } from "../../redux/action";

function ProductDetail() {
  const singleproduct  = useSelector((state) => state.product);
  console.log('product',singleproduct);
  // const { image, title, description, price, category } = product
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(singlePoroductDetail(singleproduct))
  }, [id])
  return (
    <>
      <div className="container ">
        {/* {Object.keys(product).length === 0 ? (
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
          <button to="#" className=" btn btn-primary" >ADD TO CART</button>
        </div>
         */}
      </div>
    </>
  );
};

export default ProductDetail;