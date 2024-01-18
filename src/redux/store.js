import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlices";

const store = configureStore({
    reducer: {cart: cartReducer},
})
console.log("oncreate store : ", store.getState());

store.subscribe(() => {
    console.log("Store Change : ", store.getState());
  });
export default store