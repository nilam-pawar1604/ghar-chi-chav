import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiArrowRight,
  FiEye,
  FiEyeOff,
  FiLock,
  FiMail,
  FiPhone,
  FiUser,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
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

  const handlePhoneChange = (e) => {
    const value = e.target.value
      .replace(/\D/g, "")
      .slice(0, 10);

    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = formData.firstName.trim();
    const lastName = formData.lastName.trim();
    const email = formData.email.trim().toLowerCase();
    const phone = formData.phone.trim();
    const password = formData.password;
    const confirmPassword = formData.confirmPassword;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword
    ) {
      setError("Please fill all the fields.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (phone.length !== 10) {
      setError(
        "Please enter a valid 10 digit phone number."
      );
      return;
    }

    if (password.length < 6) {
      setError(
        "Password must be at least 6 characters."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const users = JSON.parse(
      localStorage.getItem("gharChiChavUsers") || "[]"
    );

    const existingUser = users.find(
      (user) =>
        user.email.toLowerCase() === email
    );

    if (existingUser) {
      setError(
        "An account with this email already exists."
      );
      return;
    }

    const newUser = {
      id: Date.now(),
      firstName,
      lastName,
      email,
      phone,
      password,
    };

    const updatedUsers = [
      ...users,
      newUser,
    ];

    localStorage.setItem(
      "gharChiChavUsers",
      JSON.stringify(updatedUsers)
    );

    localStorage.setItem(
      "gharChiChavUser",
      JSON.stringify({
        id: newUser.id,
        firstName,
        lastName,
        email,
        phone,
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
              Join our family
            </span>

            <h1>
              घरच्या चवीत
              <br />
              <em>आपलं स्वागत.</em>
            </h1>

            <p>
              तुमचं account तयार करा आणि homemade
              products, special offers आणि तुमच्या
              orders सगळं एका ठिकाणी manage करा.
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

          {/* REGISTER CARD */}
          <div className="auth-card">

            <div className="auth-header">

              <div className="auth-icon">
                <FiUser />
              </div>

              <span className="auth-small-title">
                Create account
              </span>

              <h2>
                Join
                <br />
                <em>the family.</em>
              </h2>

              <p>
                तुमचे details enter करून account
                तयार करा.
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

              {/* FIRST + LAST NAME */}
              <div className="auth-row">

                <div className="auth-field">

                  <label>
                    First name
                  </label>

                  <div className="auth-input">

                    <FiUser />

                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First name"
                      autoComplete="given-name"
                    />

                  </div>

                </div>

                <div className="auth-field">

                  <label>
                    Last name
                  </label>

                  <div className="auth-input">

                    <FiUser />

                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      autoComplete="family-name"
                    />

                  </div>

                </div>

              </div>

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

              {/* PHONE */}
              <div className="auth-field">

                <label>
                  Phone number
                </label>

                <div className="auth-input">

                  <FiPhone />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder="9876543210"
                    maxLength="10"
                    autoComplete="tel"
                  />

                </div>

              </div>

              {/* PASSWORD */}
              <div className="auth-field">

                <label>
                  Password
                </label>

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
                    placeholder="Minimum 6 characters"
                    autoComplete="new-password"
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

              {/* CONFIRM PASSWORD */}
              <div className="auth-field">

                <label>
                  Confirm password
                </label>

                <div className="auth-input">

                  <FiLock />

                  <input
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Re-enter password"
                    autoComplete="new-password"
                  />

                  <button
                    type="button"
                    className="auth-password-toggle"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                    aria-label="Show or hide password"
                  >
                    {showConfirmPassword ? (
                      <FiEyeOff />
                    ) : (
                      <FiEye />
                    )}
                  </button>

                </div>

              </div>

              {/* TERMS */}
              <label className="auth-check">

                <input
                  type="checkbox"
                  required
                />

                <span>
                  I agree to the terms and
                  privacy policy.
                </span>

              </label>

              {/* BUTTON */}
              <button
                type="submit"
                className="btn btn-primary auth-btn"
              >
                Create Account
                <FiArrowRight />
              </button>

            </form>

            {/* LOGIN */}
            <div className="auth-bottom">

              <span>
                Already have an account?
              </span>

              <Link to="/login">
                Login
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

export default Register;