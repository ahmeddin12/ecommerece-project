import { Header } from "../components/Header";
import { Products } from "../components/Products";

export function HomePage() {
  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      <Header />
      <Products />
      <div className="home-page"></div>
    </>
  );
}
