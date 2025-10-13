import "../pages/home/HomePage.css";
import { Product } from "./Product";

export function Products({ loadCart, products }) {
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
