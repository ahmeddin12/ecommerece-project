import "./App.css";
import { Routes, Route } from "react-router";
import { HomePage } from "./pages/home/HomePage";
import { Checkout } from "./pages/checkout/Checkout";
import { Orders } from "./pages/orders//OrdersPage";
import { Tracking } from "./pages/Tracking";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [cart, setCart] = useState([]);
  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
        <Route
          path="/checkout"
          element={<Checkout cart={cart} loadCart={loadCart} />}
        />
        <Route path="/orders" element={<Orders cart={cart} />} />
        <Route
          path="/tracking/:orderId/:productId"
          element={<Tracking cart={cart} />}
        />
      </Routes>
    </>
  );
}

export default App;
