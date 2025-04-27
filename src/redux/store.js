import { configureStore } from "@reduxjs/toolkit";
// import { ProductSlice } from './Product.Slice';

import { CartSlice } from "./Cart.Slice.js";
import { ProductSlice } from "./Product.Slice.js";

export const store = configureStore({
    reducer:{
        [ProductSlice.name]: ProductSlice.reducer,
        [CartSlice.name]: CartSlice.reducer

    }
})

export default store;