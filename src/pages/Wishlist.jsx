import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiHeart,
  FiShoppingBag,
  FiTrash2,
  FiStar,
  FiCheck,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import products from "../data/products";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState(products.slice(0, 3));

  const removeFromWishlist = (id) => {
    setWishlist((current) =>
      current.filter((product) => product.id !== id)
    );
  };

  return (
    <>
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="wishlist-hero">

        <div className="wishlist-hero-overlay" />

        <div className="container wishlist-hero-content">

          <span className="wishlist-eyebrow">
            <FiHeart />
            Saved with love
          </span>

          <h1>
            तुमच्या
            <br />
            <em>आवडत्या चवी.</em>
          </h1>

          <p>
            ज्या चवी मनाला भावल्या,
            त्या सगळ्या आता एका जागी.
          </p>

        </div>

      </section>


      {/* =====================================================
          WISHLIST CONTENT
      ===================================================== */}
      <section className="wishlist-page">

        <div className="container">

          {wishlist.length > 0 ? (
            <>

              {/* ================= TOP BAR ================= */}
              <div className="wishlist-top">

                <div className="wishlist-title">

                  <span>
                    MY WISHLIST
                  </span>

                  <h2>
                    आवडते पदार्थ
                  </h2>

                  <p>
                    तुमच्या निवडलेल्या homemade favourites.
                  </p>

                </div>

                <Link
                  to="/products"
                  className="wishlist-continue"
                >
                  <span>
                    Continue Shopping
                  </span>

                  <FiArrowRight />
                </Link>

              </div>


              {/* ================= SUMMARY ================= */}
              <div className="wishlist-summary">

                <div className="wishlist-summary-item">

                  <span className="summary-icon">
                    <FiHeart />
                  </span>

                  <div>
                    <strong>{wishlist.length}</strong>
                    <span>Saved Items</span>
                  </div>

                </div>


                <div className="summary-line" />


                <div className="wishlist-summary-item">

                  <span className="summary-icon">
                    <FiCheck />
                  </span>

                  <div>
                    <strong>100%</strong>
                    <span>Homemade</span>
                  </div>

                </div>


                <div className="summary-line" />


                <div className="wishlist-summary-item">

                  <span className="summary-icon">
                    <FiStar />
                  </span>

                  <div>
                    <strong>Fresh</strong>
                    <span>Made with Love</span>
                  </div>

                </div>

              </div>


              {/* ================= GRID ================= */}
              <div className="wishlist-grid">

                {wishlist.map((product) => (

                  <article
                    className="wishlist-card"
                    key={product.id}
                  >

                    {/* IMAGE */}
                    <div className="wishlist-card-image">

                      <img
                        src={product.image}
                        alt={product.name}
                      />

                      <div className="wishlist-image-overlay" />

                      <span className="wishlist-saved">
                        <FiHeart />
                        Saved
                      </span>

                      <button
                        type="button"
                        className="wishlist-remove"
                        onClick={() =>
                          removeFromWishlist(product.id)
                        }
                        aria-label={`Remove ${product.name}`}
                      >
                        <FiTrash2 />
                      </button>

                    </div>


                    {/* INFO */}
                    <div className="wishlist-card-info">

                      <span className="wishlist-category">
                        {product.category}
                      </span>

                      <h3>
                        {product.name}
                      </h3>

                      <div className="wishlist-rating">

                        <span>
                          <FiStar />
                        </span>

                        <strong>
                          {product.rating || "4.9"}
                        </strong>

                        <small>
                          Loved by foodies
                        </small>

                      </div>


                      <div className="wishlist-card-bottom">

                        <div className="wishlist-price">

                          <small>
                            Starting from
                          </small>

                          <strong>
                            ₹{product.price}
                          </strong>

                        </div>

                        <Link
                          to={`/products/${product.id}`}
                          className="wishlist-view-btn"
                        >
                          <FiShoppingBag />
                          View
                        </Link>

                      </div>

                    </div>

                  </article>

                ))}

              </div>


              {/* ================= BOTTOM CTA ================= */}
              <div className="wishlist-bottom-cta">

                <div>

                  <span>
                    Something else caught your eye?
                  </span>

                  <h3>
                    अजून चविष्ट पदार्थ शोधा.
                  </h3>

                </div>

                <Link to="/products">
                  Explore All Products
                  <FiArrowRight />
                </Link>

              </div>

            </>
          ) : (

            /* =================================================
               EMPTY WISHLIST
            ================================================= */
            <div className="empty-wishlist">

              <div className="empty-heart">
                <FiHeart />
              </div>

              <span>
                YOUR WISHLIST
              </span>

              <h2>
                अजून favourites नाहीत.
              </h2>

              <p>
                तुमच्या आवडत्या homemade चवी इथे save करा.
                <br />
                एखादा पदार्थ आवडला की ❤️ वर क्लिक करा.
              </p>

              <Link
                to="/products"
                className="empty-wishlist-btn"
              >
                Explore Products
                <FiArrowRight />
              </Link>

            </div>

          )}

        </div>

      </section>


      <Footer />
    </>
  );
}