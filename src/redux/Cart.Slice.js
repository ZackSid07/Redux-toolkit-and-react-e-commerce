import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

 export const CartSlice = createSlice({
    name: 'cartSlice',
    initialState:{
        cart:[]
    },
    reducers:{
        addProduct(state,action){
            const filterData = state.cart.find((cur,i)=>
                cur.id ===action.payload.id
            )
                
                if(filterData){
                    //only increase quantity
                    state.cart = state.cart.map((cur)=>{
                        if(cur.id ===action.payload.id){
                            return{
                                ...cur,
                                quantity:cur.quantity+1

                            }
                        }
                        return cur
                    })
                    toast.success("Item quantity Increased")
                    return
                }
            


            state.cart.push(action.payload)
            toast.success("Item Added into Cart")
            
        },
        removeCart(){},
        increamentQty(){},
        decreamentQty(){}
    }


})

export const {addProduct , removeCart , increamentQty , decreamentQty} = CartSlice.actions;

export const CartSlicePath = (store)=>store.ProductSlice.products.data.data

// documentation 
// here export reducer 
// store