import "../pages/home/HomePage.css";
import { Product } from "./Product";
import axios from "axios";
import { useState, useEffect } from "react";

export function Products({ loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchResponse = async () => {
      axios.get("/api/products").then((response) => {
        setProducts(response.data);
      });
    };
    fetchResponse();
  }, []);
  return (
    <>
      <div className="products-grid">
        {products.map((product) => (
          <Product product={product} key={product.id} loadCart={loadCart} />
        ))}
      </div>
    </>
  );
}
