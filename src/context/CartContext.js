import { createContext, useReducer } from "react";

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ITEMS_ADDED':
      return { qty: action.payload };
    case 'DELETE_ITEMS':
      return { qty: 0 };
    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    qty: 0
  });

  return (
    < CartContext.Provider value={ { state, dispatch } }>
      { children }
    </CartContext.Provider >
  );
};