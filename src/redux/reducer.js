import { createSlice } from '@reduxjs/toolkit'
import { productData, singlePoroduct } from './action';


export const productReducer = createSlice({
  name: 'product',
  initialState: {
    isLoading: false,
    product: [],
    singleProduct:{},
    cartItem:[],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItem = action.payload;
  },
},
  extraReducers: (builder) => {
    /* Get all product */
    builder.addCase(productData.fulfilled, (state, action) => {
      state.product = action.payload.status === 200 ? action.payload.data:[];
      state.isLoading = false;
    });
    builder.addCase(productData.pending, (state) => {
      state.product = [];
      state.isLoading = true;
    });
    builder.addCase(productData.rejected, (state) => {
      state.product = [];
      state.isLoading = false;
    });

    /* get single product */
    builder.addCase(singlePoroduct.fulfilled, (state, action) => {
      state.singleProduct = action.payload.status === 200 ? action.payload.data:{}
      state.isLoading = false;
       
    });
    builder.addCase(singlePoroduct.pending, (state) => {
      state.singleProduct = {};
      state.isLoading = true;
    });
    builder.addCase(singlePoroduct.rejected, (state) => {
      state.singleProduct = {};
      state.isLoading = false;
    }); 
  }
  })

export const { product,addToCart } = productReducer.actions

export default productReducer.reducer;