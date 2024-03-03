import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import fetchProducts from "../../utils/getProducts";
import { Link, useSearchParams } from "react-router-dom";
import { Product } from "../../general.types";
import useCart from "../../hooks/useCart";

function ViewProduct(): ReactElement {
	// TODO: Read the product ID from the URL and fetch the product data.
	// HINT: You can use the `useSearchParams` hook to read the product ID from the URL.
	// HINT: You can use the `fetchProducts` function to fetch the product data.

	const [searchParams] = useSearchParams();
	const [loading, setLoading] = useState<boolean>(true);
	const [product, setProduct] = useState<Product | null>(null);
	const { addToCart } = useCart();
	const productID = searchParams.get("id");

	// TODO: Add an effect to fetch the data.

	useEffect(() => {
		if (productID) {
			fetchProducts<Product>({ id: +productID })
				.then((data) => setProduct(data))
				.finally(() => setLoading(false));
		} else {
			console.error("No product ID found in the URL.");
		}
	}, [productID]);


	// TODO: Add a function to add the product to the cart.
	function addProductToCart(): void {
		if (product) {
			addToCart(product);
		}
	}

	return (
		<>
			<Link to="../products">Back to Products</Link>
			{
				loading ? <p>Loading...</p> :
				!loading && product ? (
					<div>
						<h2>{product.title}</h2>
						<p>${product.price}</p>
						<p>{product.quantity > 0 ? `${product.quantity} in stock` : "Out of Stock"}</p>
						<button onClick={addProductToCart} disabled={product.quantity === 0}>
							{product.quantity > 0 ? "Add to Cart" : "You can't buy this item!"}
						</button>
					</div>
				) : (
					<p>No product found. The product probably doesn't exist or it got removed from our store.</p>
				)
			}
		</>
	);
}

export default ViewProduct;