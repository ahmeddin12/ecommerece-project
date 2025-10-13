import { Header } from "../../components/Header";
import { Products } from "../../components/Products";

export function HomePage({ cart, loadCart, products }) {
  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      <Header cart={cart} />
      <Products loadCart={loadCart} products={products} />
      <div className="home-page"></div>
    </>
  );
}
