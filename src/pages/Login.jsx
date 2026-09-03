import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiArrowRight,
  FiEye,
  FiEyeOff,
  FiLock,
  FiMail,
  FiUser,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = formData.email.trim().toLowerCase();
    const password = formData.password;

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    const users = JSON.parse(
      localStorage.getItem("gharChiChavUsers") || "[]"
    );

    const user = users.find(
      (item) =>
        item.email.toLowerCase() === email &&
        item.password === password
    );

    if (!user) {
      setError(
        "Invalid email or password. Please register first."
      );
      return;
    }

    localStorage.setItem(
      "gharChiChavUser",
      JSON.stringify({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        loggedIn: true,
      })
    );

    window.dispatchEvent(new Event("authUpdated"));

    navigate("/");
  };

  return (
    <>
      <Navbar />

      <main className="auth-page">
        <div className="auth-wrapper">

          {/* LEFT */}
          <div className="auth-intro">
            <span className="auth-eyebrow">
              Welcome back
            </span>

            <h1>
              पुन्हा या...
              <br />
              <em>घरच्या चवीत.</em>
            </h1>

            <p>
              तुमचे favourite homemade products,
              orders आणि special offers एका
              account मध्ये manage करा.
            </p>

            <div className="auth-benefits">

              <div className="auth-benefit">
                <span className="auth-benefit-number">
                  01
                </span>

                <span>
                  Homemade products
                </span>
              </div>

              <div className="auth-benefit">
                <span className="auth-benefit-number">
                  02
                </span>

                <span>
                  Easy & secure checkout
                </span>
              </div>

              <div className="auth-benefit">
                <span className="auth-benefit-number">
                  03
                </span>

                <span>
                  Order history
                </span>
              </div>

            </div>
          </div>

          {/* LOGIN CARD */}
          <div className="auth-card">

            <div className="auth-header">

              <div className="auth-icon">
                <FiUser />
              </div>

              <span className="auth-small-title">
                Your account
              </span>

              <h2>
                Welcome
                <br />
                <em>back.</em>
              </h2>

              <p>
                Login करून तुमची shopping
                continue करा.
              </p>

            </div>

            <form
              className="auth-form"
              onSubmit={handleSubmit}
            >

              {error && (
                <div className="auth-error">
                  {error}
                </div>
              )}

              {/* EMAIL */}
              <div className="auth-field">

                <label>
                  Email address
                </label>

                <div className="auth-input">

                  <FiMail />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                  />

                </div>

              </div>

              {/* PASSWORD */}
              <div className="auth-field">

                <div className="auth-label-row">

                  <label>
                    Password
                  </label>

                  <Link to="/forgot-password">
                    Forgot password?
                  </Link>

                </div>

                <div className="auth-input">

                  <FiLock />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                  />

                  <button
                    type="button"
                    className="auth-password-toggle"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    aria-label="Show or hide password"
                  >
                    {showPassword ? (
                      <FiEyeOff />
                    ) : (
                      <FiEye />
                    )}
                  </button>

                </div>

              </div>

              {/* REMEMBER */}
              <label className="auth-check">

                <input
                  type="checkbox"
                />

                <span>
                  Remember me
                </span>

              </label>

              {/* BUTTON */}
              <button
                type="submit"
                className="btn btn-primary auth-btn"
              >
                Login
                <FiArrowRight />
              </button>

            </form>

            {/* REGISTER */}
            <div className="auth-bottom">

              <span>
                Don't have an account?
              </span>

              <Link to="/register">
                Create account
                <FiArrowRight />
              </Link>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default Login;