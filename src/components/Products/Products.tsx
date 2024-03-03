import type { ReactElement } from "react";
import type { Product } from "../../general.types.ts";
import { useState, useEffect } from "react";
import fetchProducts from "../../utils/getProducts.ts";
import ProductCard from "../ProductCard/ProductCard.tsx";
import "./Products.css";

// Dummy hardcoded data. This should no longer be needed once the products are fetched from GitHub.
const SAMPLE_DATA: Product[] = [
	{
		title: "Water Cartons",
		price: 9.99,
		quantity: 5,
		id: 1
	},
	{
		title: "Protein Shakes",
		price: 12.99,
		quantity: 9,
		id: 2
	},
	{
		title: "Laptop",
		price: 9999.99,
		quantity: 0,
		id: 3
	},
	{
		title: "Blueberries",
		price: 3.99,
		quantity: 6,
		id: 4
	},
	{
		title: "Dumbbells",
		price: 5.99,
		quantity: 3,
		id: 5
	}
];

function Products(): ReactElement {
	// TODO: Fetch the products from GitHub and render them using the `ProductCard` component.

	// Create state to hold the products and a loading state to show a loading message while the products are being fetched.
	const [loading, setLoading] = useState<boolean>(true);
	const [products, setProducts] = useState<Product[]>([]);

	// Fetch the products from GitHub when the component mounts.
	useEffect(() => {
		fetchProducts<Product[]>()
			.then((data) => setProducts(data))
			.finally(() => setLoading(false));
	}, []);

	return (
		<>
			<div className="products">
				{
					loading ? <span>Loading...</span> :
					!loading && products.length > 0 ? products.map(
						product => <ProductCard {...product} key={product.id} />
					) : <span>No products found.</span>
				}
			</div>
		</>
	);
}

export default Products;