import { Header } from "../components/Header";
import { Products } from "../components/Products";
import { useState, useEffect } from "react";
import axios from "axios";

export function HomePage() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    axios.get("/api/cart-items").then((response) => {
      setCarts(response.data);
    });
  }, []);
  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      <Header carts={carts} />
      <Products />
      <div className="home-page"></div>
    </>
  );
}
