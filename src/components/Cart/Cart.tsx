import type { ReactElement } from "react";
import useCart from "../../hooks/useCart";
import { Product } from "../../general.types";
import ProductCard from "../ProductCard/ProductCard";
import "./Cart.css";

function Cart(): ReactElement {
  // TODO: Implement a way that grants access to the cart and a function to remove items from the cart
  const { cart, removeFromCart } = useCart();

  // TODO: Implement a function that removes a product from the cart
  function onRemoveFromCart(productID: number) {
    removeFromCart(productID);
  }

  return (
    <div className="cart-items">
      {
        cart.length === 0 ? <span>You have no items!</span> :
        cart.map((product: Product) => (
          <div key={product.id}>
            <ProductCard {...product} />
            <button onClick={() => onRemoveFromCart(product.id)}>Remove 1 from the cart</button>
          </div>
        ))
      }
    </div>
  )
}

export default Cart;