import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.tsx";
import './App.css'

function toUpperCase(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function App() {
  const { pathname } = useLocation();
  const validPaths = ["/", "/about", "/contact", "/products", "/product", "/cart"];

  const header = pathname === "/" ? "Home" :
                  pathname === "/products/product" ? "Viewing Product" :
                  toUpperCase(pathname.slice(1));
  return (
    <>
      <Navbar />
      {validPaths.includes(pathname) && <h1>{header}</h1>}
      <Outlet />
    </>
  );
}

export default App;
