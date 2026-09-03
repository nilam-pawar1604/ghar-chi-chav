import { Link } from "react-router-dom";
import {
  FiHeart,
  FiMapPin,
  FiPhone,
  FiMail,
  FiInstagram,
  FiFacebook,
  FiArrowRight,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer id="footer" className="gh-footer">

      {/* =====================================================
          FOOTER MAIN
      ===================================================== */}
      <div className="container gh-footer-container">

        {/* ================= BRAND ================= */}
        <div className="gh-footer-brand">

          <Link to="/" className="gh-footer-logo">
            <span className="gh-footer-logo-mark">
              घ
            </span>

            <span className="gh-footer-logo-text">
              <strong>घरची चव</strong>
              <small>Ghar Chi Chav</small>
            </span>
          </Link>

          <p className="gh-footer-description">
            घरच्या स्वयंपाकाची खरी चव, ताजेपणा आणि प्रेम
            प्रत्येक ताटात पोहोचवण्याचा आमचा छोटासा प्रयत्न.
          </p>

          <div className="gh-footer-tagline">
            <span>घरासारखं जेवण.</span>
            <span>मनापासून बनवलेलं.</span>
          </div>

          {/* Social */}
          <div className="gh-footer-social">

            <a
              href="#"
              aria-label="Instagram"
              className="gh-social-link"
            >
              <FiInstagram />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="gh-social-link"
            >
              <FiFacebook />
            </a>

          </div>

        </div>


        {/* ================= QUICK LINKS ================= */}
        <div className="gh-footer-column">

          <h3>Quick Links</h3>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/products">Products</Link>
            </li>

            <li>
              <Link to="/categories">Categories</Link>
            </li>

            <li>
              <Link to="/recipes">Recipes</Link>
            </li>

            <li>
              <Link to="/about">Our Story</Link>
            </li>

            <li>
              <a href="/#footer">Contact</a>
            </li>
          </ul>

        </div>


        {/* ================= MENU ================= */}
        <div className="gh-footer-column">

          <h3>Our Menu</h3>

          <ul>
            <li>
              <Link to="/products">
                घरची पूर्ण थाळी
              </Link>
            </li>

            <li>
              <Link to="/products">
                खमंग थालीपीठ
              </Link>
            </li>

            <li>
              <Link to="/products">
                भाकरीची थाळी
              </Link>
            </li>

            <li>
              <Link to="/products">
                तुपाची पुरणपोळी
              </Link>
            </li>

            <li>
              <Link to="/products">
                सगळे पदार्थ
              </Link>
            </li>
          </ul>

        </div>


        {/* ================= CONTACT ================= */}
        <div className="gh-footer-column gh-footer-contact">

          <h3>Get In Touch</h3>

          <div className="gh-contact-item">

            <span className="gh-contact-icon">
              <FiMapPin />
            </span>

            <p>
              पुणे, महाराष्ट्र
              <br />
              भारत
            </p>

          </div>


          <div className="gh-contact-item">

            <span className="gh-contact-icon">
              <FiPhone />
            </span>

            <a href="tel:+919876543210">
              +91 98765 43210
            </a>

          </div>


          <div className="gh-contact-item">

            <span className="gh-contact-icon">
              <FiMail />
            </span>

            <a href="mailto:hello@gharchichav.com">
              hello@gharchichav.com
            </a>

          </div>


          {/* Order CTA */}
          <Link
            to="/products"
            className="gh-footer-order-btn"
          >
            <span>Order Now</span>
            <FiArrowRight />
          </Link>

        </div>

      </div>


      {/* =====================================================
          FOOTER BOTTOM
      ===================================================== */}
      <div className="gh-footer-bottom">

        <div className="container gh-footer-bottom-inner">

          <p>
            © {new Date().getFullYear()}{" "}
            <strong>घरची चव</strong>.
            All rights reserved.
          </p>

          <p className="gh-footer-made">
            Made with
            <FiHeart />
            for homemade food
          </p>

        </div>

      </div>

    </footer>
  );
}