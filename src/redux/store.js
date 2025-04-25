import { configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "./Product.Slice";

export const store = configureStore({
    reducer:{
        [ProductSlice.name]: ProductSlice.reducer
        
    }
})