import {combineReducers} from "redux"
import { productReducer,selectedproductReducer } from "./productReducer";

const reducer = combineReducers({
    allproducts:productReducer,
    product:selectedproductReducer
})
export default reducer;