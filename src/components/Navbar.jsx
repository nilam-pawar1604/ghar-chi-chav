import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiHeart,
  FiShoppingBag,
  FiUser,
} from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* ================= CONTACT / FOOTER ================= */
  const handleContact = (e) => {
    e.preventDefault();
    closeMenu();

    // जर Home page वर असू
    if (location.pathname === "/") {
      const footer = document.getElementById("footer");

      if (footer) {
        footer.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      // दुसऱ्या page वरून Home + Footer
      navigate("/");

      setTimeout(() => {
        const footer = document.getElementById("footer");

        if (footer) {
          footer.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 300);
    }
  };

  const navClass = ({ isActive }) =>
    `navbar-link ${isActive ? "active" : ""}`;

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* ================= LOGO ================= */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <span className="logo-mark">घ</span>

          <span className="logo-text">
            <strong>घरची चव</strong>
            <small>Ghar Chi Chav</small>
          </span>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="navbar-menu">

          <NavLink
            to="/"
            className={navClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={navClass}
          >
            Products
          </NavLink>

          <NavLink
            to="/categories"
            className={navClass}
          >
            Categories
          </NavLink>

          <NavLink
            to="/about"
            className={navClass}
          >
            Our Story
          </NavLink>

          {/* CONTACT */}
          <a
            href="/#footer"
            className="navbar-link"
            onClick={handleContact}
          >
            Contact
          </a>

        </nav>

        {/* ================= ACTIONS ================= */}
        <div className="navbar-actions">

          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="navbar-icon"
            aria-label="Wishlist"
            onClick={closeMenu}
          >
            <FiHeart />
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="navbar-icon cart-icon"
            aria-label="Shopping cart"
            onClick={closeMenu}
          >
            <FiShoppingBag />

            <span className="cart-count">
              2
            </span>
          </Link>

          {/* Profile */}
          <Link
            to="/login"
            className="navbar-icon profile-icon"
            aria-label="Profile"
            onClick={closeMenu}
          >
            <FiUser />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`mobile-menu ${
          menuOpen ? "mobile-menu-open" : ""
        }`}
      >

        <nav className="mobile-nav">

          <NavLink
            to="/"
            className={navClass}
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={navClass}
            onClick={closeMenu}
          >
            Products
          </NavLink>

          <NavLink
            to="/categories"
            className={navClass}
            onClick={closeMenu}
          >
            Categories
          </NavLink>

          <NavLink
            to="/about"
            className={navClass}
            onClick={closeMenu}
          >
            Our Story
          </NavLink>

          {/* CONTACT */}
          <a
            href="/#footer"
            className="navbar-link"
            onClick={handleContact}
          >
            Contact
          </a>

        </nav>

        {/* ================= DIVIDER ================= */}
        <div className="mobile-menu-divider" />

        {/* ================= EXTRA LINKS ================= */}
        <div className="mobile-extra-links">

          {/* Wishlist */}
          <Link
            to="/wishlist"
            onClick={closeMenu}
          >
            <FiHeart />
            <span>Wishlist</span>
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            onClick={closeMenu}
          >
            <FiShoppingBag />

            <span>Cart</span>

            <span className="mobile-cart-count">
              2
            </span>
          </Link>

          {/* My Account */}
          <Link
            to="/login"
            onClick={closeMenu}
          >
            <FiUser />
            <span>My Account</span>
          </Link>

        </div>
      </div>
    </header>
  );
}