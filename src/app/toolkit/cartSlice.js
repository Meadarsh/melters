import { createSlice,nanoid } from "@reduxjs/toolkit";
 const initialState={
    cart:[
        { id:1, name:'haha', quantity: 2 },
    ]
 }
 const productCart = createSlice({
    name:"productCart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.cart.push(action.payload)
            },
            removeFromCart:(state, action)=> {
                let index=state.cart.findIndex((item)=>(item.name===action.payload))
                if (index!==-1){
                    state.cart.splice(index, 1);
                    }
                    },
                    updateQuantity:(state, action)=>{
                        let item=state.cart.find((item)=>(item.name===action.payload.name));
                        if (item){
                            item.quantity=action.payload.quantity;
                            }
                            },
                            }
                            })
                            export const {addToCart,removeFromCart,updateQuantity}= productCart.actions
                            export default productCart.reducer

