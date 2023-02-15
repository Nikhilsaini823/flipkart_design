import { actionType } from "../constant/actionType";

const initialState = {
    products: [],
    cart: []
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
export const productAddToCart = (state =initialState, { type, payload }) => {
    switch (type) {
        case actionType.ADD_TO_CART:
            const itemInCart = state.cart.find((product) => product.id === payload.id);
            if (itemInCart) {
              itemInCart.quantity++;
            } else {
              state.cart.push({ ...payload, quantity: 1 });
            }
        default:
            return state;
    }
};
