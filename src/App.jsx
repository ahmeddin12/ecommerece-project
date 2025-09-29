import "./App.css";
import { Routes, Route } from "react-router";
import { HomePage } from "./pages/home/HomePage";
import { Checkout } from "./pages/checkout/Checkout";
import { Orders } from "./pages/orders//OrdersPage";
import { Tracking } from "./pages/Tracking";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    axios.get("/api/cart-items?expand=product").then((response) => {
      setCarts(response.data);
    });
  }, []);
  return (
    <>
      <Routes>
        <Route index element={<HomePage carts={carts} />} />
        <Route path="/checkout" element={<Checkout carts={carts} />} />
        <Route path="/orders" element={<Orders carts={carts} />} />
        <Route path="/tracking" element={<Tracking carts={carts} />} />
      </Routes>
    </>
  );
}

export default App;
