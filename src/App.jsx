import "./App.css";
import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { Checkout } from "./pages/Checkout";
import { Orders } from "./pages/Orders";
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
        <Route path="/orders" element={<Orders />} />
        <Route path="/tracking" element={<Tracking />} />
      </Routes>
    </>
  );
}

export default App;
