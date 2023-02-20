import { createSlice } from '@reduxjs/toolkit'
import { productData, singlePoroductDetail } from './action';


export const productReducer = createSlice({
  name: 'product',
  initialState: {
    isLoading: false,
    product: []
  },
  reducers: {  },
  extraReducers: (builder) => {

    builder.addCase(productData.fulfilled, (state, action) => {
      state.product = action.payload;
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

    builder.addCase(singlePoroductDetail.fulfilled, (state ={}, action) => {
        state.product = action.payload;
        state.isLoading = false;
    });
    builder.addCase(singlePoroductDetail.pending, (state) => {
        state.product = [];
        state.isLoading = true;
    });
    builder.addCase(singlePoroductDetail.rejected, (state) => {
        state.product = [];
        state.isLoading = false;
    }); 
  }
  })

export const { product } = productReducer.actions

export default productReducer.reducer;