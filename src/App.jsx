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

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrdersData = async () => {
      let response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };
    fetchOrdersData();
  });

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
        <Route
          path="/orders"
          element={<Orders carts={carts} orders={orders} />}
        />
        <Route
          path="/tracking/:orderId/:productId"
          element={<Tracking carts={carts} orders={orders} />}
        />
      </Routes>
    </>
  );
}

export default App;
