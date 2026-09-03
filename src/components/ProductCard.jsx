import { useState } from "react";
import {
  FiHeart,
  FiShoppingBag,
  FiStar,
} from "react-icons/fi";

import { addToCart } from "../utils/cart";

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <article className="gh-product-card">

      <div className="gh-product-image-wrap">

        <img
          src={product.image}
          alt={product.name}
          className="gh-product-image"
          loading="lazy"
        />

        <span
          className={`gh-product-badge ${
            product.badge === "Bestseller"
              ? "best"
              : "veg"
          }`}
        >
          {product.badge}
        </span>

        <button
          type="button"
          className={`gh-product-wishlist ${
            liked ? "liked" : ""
          }`}
          onClick={() => setLiked(!liked)}
          aria-label="Wishlist"
        >
          <FiHeart
            fill={liked ? "currentColor" : "none"}
          />
        </button>

      </div>

      <div className="gh-product-content">

        <span className="gh-product-category">
          {product.category}
        </span>

        <h3 className="gh-product-name">
          {product.name}
        </h3>

        <span className="gh-product-english">
          {product.englishName}
        </span>

        <p className="gh-product-description">
          {product.description}
        </p>

        <div className="gh-product-rating">
          <FiStar />
          <span>{product.rating}</span>
        </div>

        <div className="gh-product-bottom">

          <div className="gh-product-price">
            <strong>
              ₹{product.price}
            </strong>

            <small>
              / {product.unit}
            </small>
          </div>

          <button
            type="button"
            className="gh-product-cart"
            aria-label={`Add ${product.name} to cart`}
            onClick={handleAddToCart}
          >
            <FiShoppingBag />
          </button>

        </div>

      </div>

    </article>
  );
}