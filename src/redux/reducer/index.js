import {combineReducers} from "redux"
import { productAddToCart, productReducer,selectedproductReducer } from "./productReducer";

const reducer = combineReducers({
    allproducts:productReducer,
    product:selectedproductReducer,
    addcart:productAddToCart
})
export default reducer;