import { createContext, useReducer } from "react";

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { cartItems: state.cartItems + 1 };
    case 'DECREMENT':
      if (state.cartItems > 0) {
        return { cartItems: state.cartItems - 1 };
      } else {
        return { ...state };
      };
    case 'ITEMS_ADDED':
      return { ...state, qty: action.payload };
    case 'DELETE_ITEMS':
      return { ...state, qty: 0 };
    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cartItems: 0,
    qty: 0
  });

  return (
    < CartContext.Provider value={ { state, dispatch } }>
      { children }
    </CartContext.Provider >
  );
};