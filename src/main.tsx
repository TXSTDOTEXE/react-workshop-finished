import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Home from "./components/Home/Home.tsx";
import About from "./components/About/About.tsx";
import Contact from "./components/Contact/Contact.tsx";
import Products from "./components/Products/Products.tsx";
import ViewProduct from "./components/ViewProduct/ViewProduct.tsx";
import Cart from './components/Cart/Cart.tsx';
import NotFound from './components/NotFound/NotFound.tsx';
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from './components/CartContext/CartContext.tsx';

// Don't modify this! This handles the routes for the React app.
const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product",
        element: <ViewProduct />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={browserRouter} />
    </CartProvider>
  </React.StrictMode>,
)
