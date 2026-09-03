import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiHeart,
  FiMinus,
  FiPlus,
  FiShoppingBag,
  FiStar,
  FiTruck,
  FiShield,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

import products from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);

  if (!product) {
    return (
      <>
        <Navbar />

        <section className="not-found">
          <div>
            <span>404</span>
            <h1>Product सापडले नाही</h1>
            <p>
              हा product उपलब्ध नाही किंवा remove करण्यात आला आहे.
            </p>

            <Link to="/products" className="btn btn-primary">
              Products कडे जा
            </Link>
          </div>
        </section>

        <Footer />
      </>
    );
  }

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((current) =>
      current > 1 ? current - 1 : 1
    );
  };

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 3);

  return (
    <>
      <Navbar />

      {/* ================= BREADCRUMB ================= */}

      <div className="product-breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span>/</span>

          <Link to="/products">Products</Link>
          <span>/</span>

          <strong>{product.name}</strong>
        </div>
      </div>

      {/* ================= PRODUCT ================= */}

      <main className="product-details-page">
        <div className="container">
          <div className="product-details-grid">

            {/* IMAGE */}

            <div className="details-image-section">
              <div className="details-image">

                {product.badge && (
                  <span className="details-badge">
                    {product.badge}
                  </span>
                )}

                <button
                  className={`details-wishlist ${
                    liked ? "liked" : ""
                  }`}
                  onClick={() => setLiked(!liked)}
                  type="button"
                  aria-label="Wishlist"
                >
                  <FiHeart />
                </button>

                <img
                  src={product.image}
                  alt={product.name}
                />
              </div>

              <div className="image-note">
                <FiLeaf />

                <span>
                  Freshly prepared in small batches
                </span>
              </div>
            </div>

            {/* INFORMATION */}

            <div className="details-content">

              <span className="details-category">
                {product.category}
              </span>

              <h1>{product.name}</h1>

              <div className="details-rating">
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FiStar key={star} />
                  ))}
                </div>

                <strong>{product.rating}</strong>

                <span>
                  {product.reviews} reviews
                </span>
              </div>

              <div className="details-price">
                <strong>₹{product.price}</strong>

                {product.oldPrice && (
                  <>
                    <del>₹{product.oldPrice}</del>

                    <span>
                      {Math.round(
                        ((product.oldPrice - product.price) /
                          product.oldPrice) *
                          100
                      )}
                      % OFF
                    </span>
                  </>
                )}
              </div>

              <p className="details-description">
                {product.description}
              </p>

              {/* Quantity */}

              <div className="quantity-section">
                <span>Quantity</span>

                <div className="quantity-box">
                  <button
                    onClick={decreaseQuantity}
                    type="button"
                  >
                    <FiMinus />
                  </button>

                  <strong>{quantity}</strong>

                  <button
                    onClick={increaseQuantity}
                    type="button"
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>

              {/* Actions */}

              <div className="details-actions">
                <button
                  className="details-cart-btn"
                  type="button"
                >
                  <FiShoppingBag />

                  Add to Cart
                </button>

                <button
                  className="details-buy-btn"
                  type="button"
                >
                  Buy Now
                </button>
              </div>

              {/* Benefits */}

              <div className="product-benefits">

                <div className="benefit">
                  <div>
                    <FiLeaf />
                  </div>

                  <section>
                    <strong>Homemade</strong>
                    <span>
                      Made with traditional recipes
                    </span>
                  </section>
                </div>

                <div className="benefit">
                  <div>
                    <FiTruck />
                  </div>

                  <section>
                    <strong>Fresh Delivery</strong>
                    <span>
                      Carefully packed for freshness
                    </span>
                  </section>
                </div>

                <div className="benefit">
                  <div>
                    <FiShield />
                  </div>

                  <section>
                    <strong>Quality Assured</strong>
                    <span>
                      Selected ingredients only
                    </span>
                  </section>
                </div>

              </div>

            </div>
          </div>
        </div>
      </main>

      {/* ================= STORY ================= */}

      <section className="product-story">
        <div className="container product-story-grid">

          <div>
            <span className="eyebrow">
              From our kitchen
            </span>

            <h2>
              प्रत्येक घासात
              <br />
              <em>घरची आठवण.</em>
            </h2>
          </div>

          <p>
            हा पदार्थ आमच्या kitchen मध्ये छोट्या batches
            मध्ये तयार केला जातो. पारंपरिक पद्धत, निवडक
            ingredients आणि homemade care यामुळे प्रत्येक
            batch ला त्याची खास चव मिळते.
          </p>

        </div>
      </section>

      {/* ================= RELATED ================= */}

      {relatedProducts.length > 0 && (
        <section className="related-products section">

          <div className="container">

            <div className="section-heading">
              <span className="small-title">
                You may also like
              </span>

              <h2>
                आणखी काही
                <br />
                <em>घरच्या चवी</em>
              </h2>
            </div>

            <div className="products-grid">
              {relatedProducts.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                />
              ))}
            </div>

          </div>

        </section>
      )}

      <Footer />
    </>
  );
}