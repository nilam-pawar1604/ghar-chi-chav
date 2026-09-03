import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheck,
  FiPackage,
  FiTruck,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Orders() {
  const orders = [
    {
      id: "#GCH1024",
      date: "20 Aug 2026",
      status: "Delivered",
      product: "Aamchi Aamba Lonche",
      amount: "₹249",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=85",
    },
    {
      id: "#GCH1021",
      date: "16 Aug 2026",
      status: "On the way",
      product: "Gharacha Special Masala",
      amount: "₹199",
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=500&q=85",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="orders-hero">
        <div className="container">
          <span className="eyebrow">
            Your journey with us
          </span>

          <h1>
            तुमच्या
            <br />
            <em>orders.</em>
          </h1>
        </div>
      </section>

      <section className="orders-page section">
        <div className="container">

          <div className="orders-heading">
            <div>
              <span className="small-title">
                Order history
              </span>

              <h2>
                तुमच्या सगळ्या orders.
              </h2>
            </div>

            <Link to="/products">
              Shop again
              <FiArrowRight />
            </Link>
          </div>

          <div className="orders-list">

            {orders.map((order) => (
              <article
                className="order-card"
                key={order.id}
              >
                <div className="order-card-top">
                  <div>
                    <span>Order</span>
                    <strong>{order.id}</strong>
                  </div>

                  <div>
                    <span>Date</span>
                    <strong>{order.date}</strong>
                  </div>

                  <span
                    className={`order-status ${
                      order.status === "Delivered"
                        ? "delivered"
                        : "shipping"
                    }`}
                  >
                    {order.status === "Delivered" ? (
                      <FiCheck />
                    ) : (
                      <FiTruck />
                    )}

                    {order.status}
                  </span>
                </div>

                <div className="order-card-product">
                  <img
                    src={order.image}
                    alt={order.product}
                  />

                  <div>
                    <span>Homemade</span>
                    <h3>{order.product}</h3>
                    <p>Quantity: 1</p>
                  </div>

                  <strong>{order.amount}</strong>

                  <Link
                    to="/products"
                    className="order-again"
                  >
                    Buy again
                    <FiArrowRight />
                  </Link>
                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}