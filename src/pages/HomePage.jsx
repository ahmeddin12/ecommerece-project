import { Header } from "../components/Header";
import { Products } from "../components/Products";
export function HomePage() {
  fetch("http://localhost:3000/api/products")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });

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
