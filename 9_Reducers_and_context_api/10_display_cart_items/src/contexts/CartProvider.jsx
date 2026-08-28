import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

function cartReducer(cart, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...cart, action.payload];

    case "INCREASE_QTY":
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });

    case "DECREASE_QTY":
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });

    case "REMOVE_ITEM":
      // ! Implicit Return
      return cart.filter((item) => item.id !== action.payload.id);

    // or

    // ! Explicit Return
    // return cart.filter((item) => {
    //   return item.id !== action.payload.id;
    // });

    default:
      return;
  }
}

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addItemTocart = (newCartItem) => {
    dispatch({ type: "ADD_ITEM", payload: newCartItem });
  };

  const increaseQty = (id) => {
    dispatch({ type: "INCREASE_QTY", payload: { id: id } });
  };

  const decreaseQty = (id) => {
    dispatch({ type: "DECREASE_QTY", payload: { id: id } });
  };

  const removeItemFromCart = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id: id } });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemTocart,
        increaseQty,
        decreaseQty,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export default CartProvider;

/*
when we return equal No. of items from an array,
but just gonna manipulate 1 or 2 items,then we use map() method... 

*/

/*

whatever we returned from Reducer, it's is become new state... 

*/
