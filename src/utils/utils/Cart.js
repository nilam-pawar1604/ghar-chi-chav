
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiMinus,
  FiPlus,
  FiTrash2,
  FiShoppingBag,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  getCart,
  updateCartQuantity,
  removeFromCart,
} from "../utils/cart";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadCart = () => {
      setCartItems(getCart());
    };

    loadCart();

    window.addEventListener("cartUpdated", loadCart);
    window.addEventListener("storage", loadCart);

    return () => {
      window.removeEventListener("cartUpdated", loadCart);
      window.removeEventListener("storage", loadCart);
    };
  }, []);

  const handleIncrease = (id, quantity) => {
    updateCartQuantity(id, quantity + 1);
  };

  const handleDecrease = (id, quantity) => {
    updateCartQuantity(id, quantity - 1);
  };

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      {/* ================= CART HERO ================= */}

      <section className="cart-hero">
        <div className="container">
          <span className="eyebrow">Your basket</span>

          <h1>
            घरच्या चवींची
            <br />
            <em>तुमची basket.</em>
          </h1>

          <p>
            तुमचे favourite homemade products
            <br />
            एकाच ठिकाणी.
          </p>
        </div>
      </section>

      {/* ================= CART PAGE ================= */}

      <section className="cart-page section">
        <div className="container">
          {/* ================= EMPTY CART ================= */}

          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty-icon">
                <FiShoppingBag />
              </div>

              <span className="small-title">
                Your basket is empty
              </span>

              <h2>
                अजून काही
                <br />
                <em>निवडलं नाही.</em>
              </h2>

              <p>
                आमचे homemade products explore करा
                आणि तुमच्या आवडीचे products
                basket मध्ये add करा.
              </p>

              <Link
                to="/products"
                className="btn btn-primary"
              >
                Explore Products
                <FiArrowRight />
              </Link>
            </div>
          ) : (
            /* ================= CART ================= */

            <div className="cart-grid">
              {/* ================= CART ITEMS ================= */}

              <div className="cart-items">
                <div className="cart-heading">
                  <div>
                    <span className="small-title">
                      Your cart
                    </span>

                    <h2>
                      {totalItems}{" "}
                      {totalItems === 1 ? "item" : "items"}
                    </h2>
                  </div>

                  <Link to="/products">
                    Continue shopping
                    <FiArrowRight />
                  </Link>
                </div>

                {cartItems.map((item) => (
                  <article
                    className="cart-item"
                    key={item.id}
                  >
                    {/* PRODUCT IMAGE */}

                    <div className="cart-item-image">
                      <img
                        src={item.image}
                        alt={item.name}
                      />
                    </div>

                    {/* PRODUCT INFO */}

                    <div className="cart-item-info">
                      {item.category && (
                        <span>{item.category}</span>
                      )}

                      <h3>{item.name}</h3>

                      {item.englishName && (
                        <small>
                          {item.englishName}
                        </small>
                      )}

                      <strong>
                        ₹
                        {Number(item.price).toLocaleString(
                          "en-IN"
                        )}
                      </strong>

                      {item.unit && (
                        <small>{item.unit}</small>
                      )}
                    </div>

                    {/* QUANTITY */}

                    <div className="quantity-control">
                      <button
                        type="button"
                        onClick={() =>
                          handleDecrease(
                            item.id,
                            item.quantity
                          )
                        }
                        aria-label="Decrease quantity"
                      >
                        <FiMinus />
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        type="button"
                        onClick={() =>
                          handleIncrease(
                            item.id,
                            item.quantity
                          )
                        }
                        aria-label="Increase quantity"
                      >
                        <FiPlus />
                      </button>
                    </div>

                    {/* TOTAL */}

                    <div className="cart-item-total">
                      <strong>
                        ₹
                        {(
                          Number(item.price) *
                          Number(item.quantity)
                        ).toLocaleString("en-IN")}
                      </strong>

                      <button
                        type="button"
                        onClick={() =>
                          handleRemove(item.id)
                        }
                        aria-label={`Remove ${item.name}`}
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              {/* ================= ORDER SUMMARY ================= */}

              <aside className="cart-summary">
                <div className="cart-summary-icon">
                  <FiShoppingBag />
                </div>

                <span className="small-title">
                  Order summary
                </span>

                <h2>
                  तुमची
                  <br />
                  <em>order.</em>
                </h2>

                <div className="summary-lines">
                  <div>
                    <span>Items</span>

                    <strong>
                      {totalItems}
                    </strong>
                  </div>

                  <div>
                    <span>Subtotal</span>

                    <strong>
                      ₹
                      {subtotal.toLocaleString(
                        "en-IN"
                      )}
                    </strong>
                  </div>

                  <div>
                    <span>Delivery</span>

                    <strong className="free">
                      FREE
                    </strong>
                  </div>
                </div>

                <div className="summary-total">
                  <span>Total</span>

                  <strong>
                    ₹
                    {subtotal.toLocaleString(
                      "en-IN"
                    )}
                  </strong>
                </div>

                <Link
                  to="/checkout"
                  className="btn btn-primary checkout-btn"
                >
                  Proceed to Checkout
                  <FiArrowRight />
                </Link>

                <div className="cart-note">
                  Homemade goodness,
                  <br />
                  packed with care ❤️
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

