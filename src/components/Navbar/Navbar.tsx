import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import useCart from "../../hooks/useCart";

function Navbar(): ReactElement {
	// TODO: Access the cart and display the number of items in the cart.
	const { cart } = useCart();

	return (
		<nav>
			<Link className="nav-link" to="./">E-Commerence Logo</Link>

			<div>
				<Link className="nav-link" to="./about">About</Link>
				<Link className="nav-link" to="./contact">Contact</Link>
				<Link className="nav-link" to="./products">Products</Link>
				<Link className="nav-link" to="./cart">Cart ({cart.length})</Link>
			</div>
		</nav>
	);
}

export default Navbar;