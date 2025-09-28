import "../pages/HomePage.css";
import { products } from "../../ecommerce-project-main/data/products";
import { Product } from "./Product";

export function Products() {
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
