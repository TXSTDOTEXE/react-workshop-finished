import type { ReactElement } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import "./ProductCard.css";
import { Product } from "../../general.types";

function ProductCard({ title, price, quantity, id }: Product): ReactElement {
	const navigateTo = useNavigate();
	const idString = id.toString();

	function onCardClick(): void {
		navigateTo({
			pathname: "../product",
			search: createSearchParams({ id: idString }).toString()
		});
	}

	return (
		<div className="product-card" onClick={onCardClick}>
			<h3>{title}</h3>
			<p>${price}</p>
			<p>{quantity} items</p>
		</div>
	);
}

export default ProductCard;