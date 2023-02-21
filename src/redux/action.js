import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../lib/api';

const productData = createAsyncThunk(
    'productData',
    async () => {
        const response = await api.get()
        .then(data => {            
            return {data:data.data, status:200};
        })
        .catch((err) => {
            return {status:500};
        }); 
        return response;
    }
);
const singlePoroduct = createAsyncThunk(
    'singlePoroduct',
    async (id) => {        
        const response = await api.get(`${id}`)
            .then((data) => {
                return {data:data.data, status:200};
            })
            .catch((err) => {
                return {status:500};
            });            
        return response;
    }
);


export {
    productData,
    singlePoroduct,
}
