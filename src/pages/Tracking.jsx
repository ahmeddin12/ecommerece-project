import "./Tracking.css";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Header } from "../components/Header";
import axios from "axios";
import "../components/header.css";
import dayjs from "dayjs";
import { useParams } from "react-router";

export function Tracking({ carts }) {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchTrackingData = async () => {
      let response = await axios.get(`/api/orders/${orderId}?expand=products`);
      setOrder(response.data);
    };
    fetchTrackingData();
  }, [orderId]);
  if (!order) {
    return null;
  }
  return (
    <>
      <Header carts={carts} />
      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>
          {order.products.map((product) => {
            return (
              <>
                <div className="delivery-date" key={product.productID}>
                  Arriving on:{" "}
                  {dayjs(product.estimatedDeliveryTimeMs).format("MMMM D")}
                </div>

                <div className="product-info">{product.product.name}</div>

                <div className="product-info">Quantity: {product.quantity}</div>

                <img className="product-image" src={product.product.image} />

                <div className="progress-labels-container">
                  <div className="progress-label">Preparing</div>
                  <div className="progress-label current-status">Shipped</div>
                  <div className="progress-label">Delivered</div>
                </div>

                <div className="progress-bar-container">
                  <div className="progress-bar"></div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
