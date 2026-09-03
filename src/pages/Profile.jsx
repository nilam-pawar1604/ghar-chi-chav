import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiHeart,
  FiPackage,
  FiSettings,
  FiUser,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Profile() {
  return (
    <>
      <Navbar />

      <section className="profile-hero">
        <div className="container">
          <span className="eyebrow">
            Your little corner
          </span>

          <h1>
            नमस्कार,
            <br />
            <em>Manu.</em>
          </h1>
        </div>
      </section>

      <section className="profile-page section">
        <div className="container profile-grid">

          <aside className="profile-sidebar">

            <div className="profile-avatar">
              M
            </div>

            <h2>Manu</h2>

            <p>
              hello@example.com
            </p>

            <nav>
              <Link
                to="/profile"
                className="active"
              >
                <FiUser />
                Profile
              </Link>

              <Link to="/orders">
                <FiPackage />
                Orders
              </Link>

              <Link to="/wishlist">
                <FiHeart />
                Wishlist
              </Link>

              <Link to="/profile">
                <FiSettings />
                Settings
              </Link>
            </nav>

          </aside>

          <div className="profile-content">

            <div className="profile-heading">
              <span className="small-title">
                Account details
              </span>

              <h2>
                तुमची
                <br />
                <em>माहिती.</em>
              </h2>
            </div>

            <form className="profile-form">

              <div className="form-row">
                <label>
                  First name
                  <input
                    type="text"
                    value="Manu"
                    readOnly
                  />
                </label>

                <label>
                  Last name
                  <input
                    type="text"
                    value=""
                    placeholder="Last name"
                    readOnly
                  />
                </label>
              </div>

              <label>
                Email
                <input
                  type="email"
                  value="hello@example.com"
                  readOnly
                />
              </label>

              <label>
                Phone
                <input
                  type="tel"
                  placeholder="+91"
                  readOnly
                />
              </label>

              <label>
                Delivery address
                <textarea
                  rows="4"
                  placeholder="Add your address"
                  readOnly
                ></textarea>
              </label>

              <button
                type="button"
                className="btn btn-primary"
              >
                Save Changes
                <FiArrowRight />
              </button>

            </form>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}