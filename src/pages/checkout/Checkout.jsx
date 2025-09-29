import axios from "axios";
import { useState, useEffect } from "react";
import { OrderSummary } from "./OrderSummery";
import { PaymentSummary } from "./PaymentSummery";
import "../../components/CheckoutHeader";
import "../../components/checkout-header.css";
import { CheckoutHeader } from "../../components/CheckoutHeader";
import "./Checkout.css";

export function Checkout({ carts }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    const fetchCheckoutData = async () => {
      let response = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveryTime"
      );
      setDeliveryOptions(response.data);

      response = await axios.get("/api/payment-summary");
      setPaymentSummary(response.data);
    };

    fetchCheckoutData();
  }, []);

  return (
    <>
      <title>Checkout</title>

      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary carts={carts} deliveryOptions={deliveryOptions} />

          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  );
}
