import {configureStore, createSlice} from "@reduxjs/toolkit";


// createSlice = createAction + createReducer
// jadi penerapan nya lebih rapih
const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload)
        }
    }
})


const store = configureStore({
    reducer: {
      cart: cartSlice.reducer,
    },
  });

  console.log("oncreate store : ", store.getState());

// Subscribe
store.subscribe(() => {
  console.log("onchange store : ", store.getState());
});

store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 1 }))