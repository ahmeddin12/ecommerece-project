import "./App.css";
import { Routes, Route } from "react-router";
import { HomePage } from "./pages/home/HomePage";
import { Checkout } from "./pages/checkout/Checkout";
import { Orders } from "./pages/orders//OrdersPage";
import { Tracking } from "./pages/Tracking";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };

  useEffect(() => {
    const fetchResponse = async () => {
      axios.get("/api/products").then((response) => {
        setProducts(response.data);
      });
    };
    fetchResponse();
  }, []);

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <>
      <Routes>
        <Route
          index
          element={
            <HomePage cart={cart} loadCart={loadCart} products={products} />
          }
        />
        <Route
          path="/checkout"
          element={<Checkout cart={cart} loadCart={loadCart} />}
        />
        <Route
          path="/orders"
          element={<Orders cart={cart} products={products} />}
        />
        <Route
          path="/tracking/:orderId/:productId"
          element={<Tracking cart={cart} />}
        />
      </Routes>
    </>
  );
}

export default App;
