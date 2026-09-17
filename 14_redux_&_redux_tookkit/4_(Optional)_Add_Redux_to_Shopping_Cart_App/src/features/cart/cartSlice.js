import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemToCart: (cart, action) => {
      return [...cart, action.payload];
    },
    increaseQty: (cart, action) => {
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    },
    decreaseQty: (cart, action) => {
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    },
    removeItemFromCart: (cart, action) => {
      return cart.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItemToCart, increaseQty, decreaseQty, removeItemFromCart } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;

export default cartReducer;

/*
in redux toolkit, you don't have to perform action.type inside of switch case stuff... like you do when working with context and useReducer()


*/
