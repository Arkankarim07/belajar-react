import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart", 
    initialState: {
        // menampung data cart
        data: JSON.parse(localStorage.getItem("cart")) || [],
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.data.find(item => item.id === action.payload.id)
            // jika itemnya sudah ada tambah qtynya
            if (itemInCart) {
                itemInCart.qty++
            } else {
                state.data.push(action.payload)
            }
        }
    }
})


export const {addToCart} = cartSlice.actions
export default cartSlice.reducer