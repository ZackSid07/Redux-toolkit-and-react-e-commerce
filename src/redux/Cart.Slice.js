import { createSlice } from "@reduxjs/toolkit";

 export const CartSlice = createSlice({
    name: 'cartSlice',
    initialState:{
        cart:[]
    },
    reducers:{
        addProduct(state,action){
            state.cart.push(action.payload)
        },
        removeCart(){},
        increamentQty(){},
        decreamentQty(){}
    }


})

export const {addProduct , removeCart , increamentQty , decreamentQty} = CartSlice.actions;

export const CartSlicePath = (store)=>store.CartSlice.products.data.data