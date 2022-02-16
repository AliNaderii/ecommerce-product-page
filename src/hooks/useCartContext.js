import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const useCartContext = () => {
  const state = useContext(CartContext);
  return state;
};
