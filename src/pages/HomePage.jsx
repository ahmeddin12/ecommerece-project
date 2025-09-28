import { Header } from "../components/Header";
import { Products } from "../components/Products";

export function HomePage({ carts }) {
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
