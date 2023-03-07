import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singlePoroduct } from "../../redux/action";
import { addToCart } from "../../redux/reducer";

function ProductDetail() {
 const { id } = useParams();
  const dispatch = useDispatch();
  const {singleProduct} = useSelector((state) => state.product );
  const { image, title, description, price, category } = singleProduct
  
  useEffect(() => {
    dispatch(singlePoroduct(id));
  }, [dispatch, id]); 
  // console.log('cartItem',cartItem);
  // const add_to_cart = () => {
    // const finalArray = [...cartItem];
    // finalArray.push({product: singleProduct});
    // dispatch(addToCart(finalArray));
    // finalArray.cartQty = 1;
  //   console.log('finalArray',finalArray);
  // }

  return (
    <>
      <div className="container ">
        {Object.keys(singleProduct).length === 0 ? (
          <div>Loarding.....</div>) : (
          <div className="row justify-content-center">
            <div className="col col-lg-6 mt-5">
              <div className="container text-center">
                {singleProduct.image &&
                  <img src={image} height= '300px' width= '350px' />
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
        <div className="text-center">
          <input type="number" name="number" defaultValue="3"  />
          <button onClick={() => dispatch(addToCart({id, title, image, price }))} className=" btn btn-primary" >ADD TO CART</button>
        </div>
        
      </div>
    </>
  );
};

export default ProductDetail;