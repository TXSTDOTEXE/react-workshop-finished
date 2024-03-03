import type { ReactElement, ReactNode } from "react";
import type { CartContextType } from "../../general.types";
import { createContext, useMemo, useCallback, useState } from "react";

import type { Product } from "../../general.types";

// Create a new context to hold the cart state and the functions to add and remove items from the cart.
// The context is initialized with `undefined` as the default value.
// This is important because the context will be `undefined` until the `CartProvider` component is used.
// When ready, the `CartProvider` component will provide the context to its children.
const CartContext = createContext<CartContextType | undefined>(undefined);

// This component provides the cart context to its children.
// Essentially, it passes down the cart state and the functions to add and remove items from the cart
// to its children. The children read this context through the `useContext` hook.
function CartProvider({ children }: { children: ReactNode }): ReactElement {
  const [cart, setCart] = useState<Product[]>([]);

  /**
   * Add a product to the cart.
   * This function is wrapped in `useCallback` to prevent unnecessary re-renders.
   * (The function is memoized and only changes when the dependencies change.
   * In this case, the only dependency is `cart`, so the function will only
   * be re-created when `cart` changes.)
   * @param {Product} product - The product to add to the cart.
   * @returns {void}
   */
  const addToCart = useCallback((product: Product) => {
    const productIndex = cart.findIndex((p) => p.id === product.id);
    if (productIndex === -1) {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
      return;
    }

    const newCart = [...cart];
    newCart[productIndex].quantity++;
    setCart(newCart);
  }, [cart]);

  /**
   * Remove a product from the cart.
   * This function is wrapped in `useCallback` to prevent unnecessary re-renders.
   * (The function is memoized and only changes when the dependencies change.
   * In this case, the only dependency is `cart`, so the function will only
   * be re-created when `cart` changes.)
   * @param {number} productID - The ID of the product to remove from the cart.
   * @returns {void}
   */
  const removeFromCart = useCallback((productID: number) => {
    const productIndex = cart.findIndex((p) => p.id === productID);
    if (productIndex === -1) {
      return;
    }

    const newCart = [...cart];
    newCart[productIndex].quantity--;

    if (newCart[productIndex].quantity <= 0) {
      newCart.splice(productIndex, 1);
    }

    setCart(newCart);
  }, [cart]);

  // Memoize the context value to ensure that the context value only changes when the cart state or the functions change.
  const contextValue = useMemo(() => ({ cart, addToCart, removeFromCart }), [cart, addToCart, removeFromCart]);

  // Provide the context value to the children.
  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}

export { CartProvider, CartContext };