import { actionType } from "../constant/actionType"

export const setProducts = (products) =>{
    return {
        type: actionType.SET_PRODUCTS,
        payload : products
    }
}

export const selectedProduct = (product) =>{
    return {
        type: actionType.SELECTED_PRODUCT,
        payload : product
    }
}

export const removeselectedProduct = () =>{
    return {
        type: actionType.REMOVE_SELECTED_PRODUCT,
    }
}
export const addToCart = (id) =>{
    return {
        type: actionType.ADD_TO_CART,
        payload :id,
        
    }
}
