import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const productData = createAsyncThunk(
    'productData',
    async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products/")
            .catch((err) => {
                console.log("err", err)
            });
            // console.log("data13 ",response.data)
        return response.data;
    }
);
const singlePoroductDetail = createAsyncThunk(
    'singlePoroductDetail',
    async () => {
        const { id } = useParams();
        const response = await axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .catch((err) => {
                console.log("err", err)
            });
            console.log("data13123",response)
        return response;
    }
);

export {
    productData,
    singlePoroductDetail,
}
