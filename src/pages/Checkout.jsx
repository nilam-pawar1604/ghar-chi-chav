import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiCheckCircle,
  FiCreditCard,
  FiMapPin,
  FiShoppingBag,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  getCart,
  clearCart,
} from "../utils/cart";

function Checkout() {
  const [cartItems, setCartItems] = useState([]);

  const [paymentMethod, setPaymentMethod] =
    useState("cod");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    pin: "",
  });

  const [orderPlaced, setOrderPlaced] =
    useState(false);

  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    const cart = getCart();
    setCartItems(cart);
  }, []);

  const totalItems = cartItems.reduce(
    (total, item) =>
      total + Number(item.quantity || 0),
    0
  );

  const subtotal = cartItems.reduce(
    (total, item) =>
      total +
      Number(item.price || 0) *
        Number(item.quantity || 0),
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.phone.trim() ||
      !formData.address.trim() ||
      !formData.city.trim() ||
      !formData.pin.trim()
    ) {
      alert(
        "Please fill all delivery details."
      );
      return;
    }

    if (formData.phone.length < 10) {
      alert(
        "Please enter a valid phone number."
      );
      return;
    }

    if (formData.pin.length !== 6) {
      alert(
        "Please enter a valid 6 digit PIN code."
      );
      return;
    }

    if (paymentMethod === "online") {
      const confirmed = window.confirm(
        `Demo Online Payment\n\nAmount: ₹${subtotal.toLocaleString(
          "en-IN"
        )}\n\nClick OK to simulate successful payment.`
      );

      if (!confirmed) {
        return;
      }
    }

    const generatedOrderId =
      "GCC" +
      Date.now().toString().slice(-8);

    setOrderId(generatedOrderId);

    setOrderPlaced(true);

    clearCart();
  };

  /* =====================================================
     SUCCESS
  ===================================================== */

  if (orderPlaced) {
    return (
      <>
        <Navbar />

        <section className="checkout-success">
          <div className="container">
            <div className="success-card">

              <div className="success-icon">
                <FiCheckCircle />
              </div>

              <span className="small-title">
                Order confirmed
              </span>

              <h1>
                धन्यवाद!
                <br />
                <em>तुमची order आली आहे.</em>
              </h1>

              <p>
                तुमची order successfully
                place झाली आहे.
                <br />
                आम्ही लवकरच तुमच्याशी
                contact करू.
              </p>

              <div className="success-order-info">
                <div>
                  <span>Order ID</span>
                  <strong>
                    #{orderId}
                  </strong>
                </div>

                <div>
                  <span>Payment</span>
                  <strong>
                    {paymentMethod === "cod"
                      ? "Cash on Delivery"
                      : "Online Payment"}
                  </strong>
                </div>

                <div>
                  <span>Total</span>
                  <strong>
                    ₹
                    {subtotal.toLocaleString(
                      "en-IN"
                    )}
                  </strong>
                </div>
              </div>

              <div className="success-address">
                <FiMapPin />

                <div>
                  <strong>
                    Delivery to
                  </strong>

                  <p>
                    {formData.firstName}{" "}
                    {formData.lastName}
                    <br />
                    {formData.address},{" "}
                    {formData.city} -{" "}
                    {formData.pin}
                  </p>
                </div>
              </div>

              <Link
                to="/products"
                className="btn btn-primary"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  }

  /* =====================================================
     CHECKOUT
  ===================================================== */

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="checkout-hero">
        <div className="container">

          <span className="eyebrow">
            Almost there
          </span>

          <h1>
            तुमची order
            <br />
            <em>complete करा.</em>
          </h1>

          <p>
            फक्त काही details बाकी आहेत.
          </p>

        </div>
      </section>

      {/* MAIN */}
      <section className="checkout-page section">
        <div className="container">

          {cartItems.length === 0 ? (
            <div className="checkout-empty-page">

              <div className="cart-empty-icon">
                <FiShoppingBag />
              </div>

              <span className="small-title">
                Your cart is empty
              </span>

              <h2>
                आधी काही
                <br />
                <em>products निवडा.</em>
              </h2>

              <Link
                to="/products"
                className="btn btn-primary"
              >
                Explore Products
                <FiShoppingBag />
              </Link>

            </div>
          ) : (
            <div className="checkout-grid">

              {/* =================================================
                 LEFT
              ================================================= */}

              <form
                className="checkout-form"
                onSubmit={handleSubmit}
              >

                {/* DELIVERY */}

                <div className="checkout-section">

                  <div className="checkout-number">
                    01
                  </div>

                  <div className="checkout-section-content">

                    <div className="checkout-section-title">

                      <div>
                        <span className="small-title">
                          Delivery details
                        </span>

                        <h2>
                          Where should we
                          <br />
                          send your order?
                        </h2>
                      </div>

                      <FiMapPin />

                    </div>

                    <div className="checkout-fields">

                      <div className="field-group">
                        <label>
                          First name
                        </label>

                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="First name"
                        />
                      </div>

                      <div className="field-group">
                        <label>
                          Last name
                        </label>

                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Last name"
                        />
                      </div>

                      <div className="field-group full">
                        <label>
                          Phone
                        </label>

                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              phone: e.target.value.replace(
                                /\D/g,
                                ""
                              ),
                            })
                          }
                          placeholder="9876543210"
                          maxLength="10"
                        />
                      </div>

                      <div className="field-group full">
                        <label>
                          Address
                        </label>

                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="House no., street, area..."
                          rows="4"
                        />
                      </div>

                      <div className="field-group">
                        <label>
                          City
                        </label>

                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="Pune"
                        />
                      </div>

                      <div className="field-group">
                        <label>
                          PIN code
                        </label>

                        <input
                          type="text"
                          name="pin"
                          value={formData.pin}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              pin: e.target.value.replace(
                                /\D/g,
                                ""
                              ),
                            })
                          }
                          placeholder="411001"
                          maxLength="6"
                        />
                      </div>

                    </div>
                  </div>
                </div>

                {/* PAYMENT */}

                <div className="checkout-section">

                  <div className="checkout-number">
                    02
                  </div>

                  <div className="checkout-section-content">

                    <div className="checkout-section-title">

                      <div>
                        <span className="small-title">
                          Payment
                        </span>

                        <h2>
                          Choose your
                          <br />
                          payment method.
                        </h2>
                      </div>

                      <FiCreditCard />

                    </div>

                    <div className="payment-options">

                      {/* ONLINE */}

                      <label
                        className={`payment-card ${
                          paymentMethod === "online"
                            ? "selected"
                            : ""
                        }`}
                      >

                        <input
                          type="radio"
                          name="payment"
                          value="online"
                          checked={
                            paymentMethod ===
                            "online"
                          }
                          onChange={(e) =>
                            setPaymentMethod(
                              e.target.value
                            )
                          }
                        />

                        <div className="payment-icon">
                          <FiCreditCard />
                        </div>

                        <div>
                          <strong>
                            Online Payment
                          </strong>

                          <span>
                            UPI / Card / Net Banking
                          </span>
                        </div>

                        <div className="payment-radio">
                          {paymentMethod ===
                            "online" && (
                            <FiCheckCircle />
                          )}
                        </div>

                      </label>

                      {/* COD */}

                      <label
                        className={`payment-card ${
                          paymentMethod === "cod"
                            ? "selected"
                            : ""
                        }`}
                      >

                        <input
                          type="radio"
                          name="payment"
                          value="cod"
                          checked={
                            paymentMethod ===
                            "cod"
                          }
                          onChange={(e) =>
                            setPaymentMethod(
                              e.target.value
                            )
                          }
                        />

                        <div className="payment-icon">
                          <FiShoppingBag />
                        </div>

                        <div>
                          <strong>
                            Cash on Delivery
                          </strong>

                          <span>
                            Pay when your order arrives
                          </span>
                        </div>

                        <div className="payment-radio">
                          {paymentMethod ===
                            "cod" && (
                            <FiCheckCircle />
                          )}
                        </div>

                      </label>

                    </div>

                    {/* ONLINE INFO */}

                    {paymentMethod === "online" && (
                      <div className="online-payment-box">

                        <div className="online-payment-icon">
                          <FiCreditCard />
                        </div>

                        <div>
                          <span>
                            Demo Payment
                          </span>

                          <h3>
                            Secure online payment
                          </h3>

                          <p>
                            UPI, Debit Card,
                            Credit Card किंवा
                            Net Banking select
                            करून payment करू
                            शकता.
                          </p>

                          <strong>
                            Amount: ₹
                            {subtotal.toLocaleString(
                              "en-IN"
                            )}
                          </strong>
                        </div>

                      </div>
                    )}

                  </div>
                </div>

                {/* BUTTON */}

                <button
                  type="submit"
                  className="btn btn-primary place-order-btn"
                >
                  {paymentMethod === "online"
                    ? `Pay ₹${subtotal.toLocaleString(
                        "en-IN"
                      )}`
                    : "Place Order"}

                  <FiCheckCircle />
                </button>

              </form>

              {/* =================================================
                 SUMMARY
              ================================================= */}

              <aside className="checkout-summary">

                <div className="summary-top">

                  <div>
                    <span className="small-title">
                      Your order
                    </span>

                    <h2>
                      Order
                      <br />
                      <em>summary.</em>
                    </h2>
                  </div>

                  <FiShoppingBag />

                </div>

                <div className="checkout-products">

                  {cartItems.map((item) => (
                    <div
                      className="checkout-product"
                      key={item.id}
                    >

                      <div className="checkout-product-image">
                        <img
                          src={item.image}
                          alt={item.name}
                        />
                      </div>

                      <div className="checkout-product-info">

                        <strong>
                          {item.name}
                        </strong>

                        <span>
                          Qty: {item.quantity}
                        </span>

                      </div>

                      <strong>
                        ₹
                        {(
                          Number(item.price) *
                          Number(item.quantity)
                        ).toLocaleString(
                          "en-IN"
                        )}
                      </strong>

                    </div>
                  ))}

                </div>

                <div className="checkout-summary-lines">

                  <div>
                    <span>
                      Items
                    </span>

                    <strong>
                      {totalItems}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Subtotal
                    </span>

                    <strong>
                      ₹
                      {subtotal.toLocaleString(
                        "en-IN"
                      )}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Delivery
                    </span>

                    <strong className="free">
                      FREE
                    </strong>
                  </div>

                </div>

                <div className="checkout-total">

                  <span>
                    Total
                  </span>

                  <strong>
                    ₹
                    {subtotal.toLocaleString(
                      "en-IN"
                    )}
                  </strong>

                </div>

                <div className="secure-checkout">

                  <FiCheckCircle />

                  <span>
                    Secure checkout
                  </span>

                </div>

                <Link
                  to="/cart"
                  className="back-to-cart"
                >
                  <FiArrowLeft />
                  Back to cart
                </Link>

              </aside>

            </div>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Checkout;