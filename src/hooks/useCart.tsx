import { useContext } from "react";
import { CartContext } from "../components/CartContext/CartContext";

/**
 * A custom hook to access the cart context. This hook will provide access
 * to the cart state and the functions to add and remove items from the cart to
 * any component that wishes to use it.
 * 
 * If the hook is used outside of a `CartProvider`, an error will be thrown.
 * 
 * @returns {CartContextType} The cart context.
 */
export default function useCart() {
  // TODO: Read the `CartContext` and return the context value.
  // NOTE: You should also add a check to ensure that the hook is used within a `CartProvider`.
  // This will ensure that the context value is not `undefined` when accessing the cart state and functions.
  // Recall that the default value of the `CartContext` is `undefined`.

  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}