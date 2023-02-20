import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";
import productReducer  from '../reducer';

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    product:productReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
})
const persistor = persistStore(store);
export { store, persistor }