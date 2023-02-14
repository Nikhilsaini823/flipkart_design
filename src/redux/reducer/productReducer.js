import { actionType } from "../constant/actionType";

const initialState = {
    products: [],
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionType.SET_PRODUCTS:
            return { ...state, products: payload };   
        default:
            return state;
    }
    
}
export const selectedproductReducer = (state= {}, { type, payload }) => {
    switch (type) {
        case actionType.SELECTED_PRODUCT:
            return { ...state, ...payload };  
        case actionType.REMOVE_SELECTED_PRODUCT:
            return {}; 
        default:
            return state;
    } 
};
