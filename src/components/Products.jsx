import "../pages/HomePage.css";
import { Product } from "./Product";
import axios from "axios";
import { useState, useEffect } from "react";

export function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);
  return (
    <>
      <div className="products-grid">
        {products.map((product) => (
          <Product
            image={product.image}
            name={product.name}
            stars={product.rating.stars}
            count={product.rating.count}
            price={product.priceCents}
            key={product.id}
          />
        ))}
      </div>
    </>
  );
}
