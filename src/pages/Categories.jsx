import React from "react";
import { FiArrowRight, FiPackage } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import products from "../data/products";



const categoryData = {
  Pickles: {
    marathi: "लोणची",
    english: "Pickles",
    description:
      "आंबट, तिखट आणि खमंग घरगुती लोणची.",
  },

  Sweets: {
    marathi: "गोड पदार्थ",
    english: "Sweets",
    description:
      "घरच्या पद्धतीने तयार केलेले पारंपरिक गोड पदार्थ.",
  },

  "Main Course": {
    marathi: "मुख्य पदार्थ",
    english: "Main Course",
    description:
      "घरच्या जेवणाची अस्सल चव देणारे खास पदार्थ.",
  },

  Chutneys: {
    marathi: "चटण्या",
    english: "Chutneys",
    description:
      "जेवणाची चव वाढवणाऱ्या खास घरगुती चटण्या.",
  },

  Masalas: {
    marathi: "मसाले",
    english: "Masalas",
    description:
      "अस्सल घरगुती चवीसाठी तयार केलेले सुगंधी मसाले.",
  },

  Snacks: {
    marathi: "नाश्ता",
    english: "Snacks",
    description:
      "चहासोबत खाण्यासाठी खमंग आणि कुरकुरीत पदार्थ.",
  },

  Papad: {
    marathi: "पापड",
    english: "Papad",
    description:
      "पारंपरिक पद्धतीने तयार केलेले कुरकुरीत घरगुती पापड.",
  },
};

export default function Categories() {
  const navigate = useNavigate();

  const categories = Object.entries(categoryData).map(
    ([category, info]) => {
      const categoryProducts = products.filter(
        (product) => product.category === category
      );

      return {
        category,
        ...info,
        image: categoryProducts[0]?.image,
        count: categoryProducts.length,
      };
    }
  );

  const openCategory = (category) => {
    navigate(
      `/products?category=${encodeURIComponent(category)}`
    );
  };

  return (
    <>
      <Navbar />

      <main className="gh-categories-page">

        {/* ================= HERO ================= */}

        <section className="gh-category-hero">

          <div className="gh-category-hero-inner">

            <span className="gh-category-eyebrow">
              घरची चव • Homemade Delicacies
            </span>

            <h1>
              आमच्या <span>श्रेणी</span>
            </h1>

            <p>
              घरच्या प्रेमाने, पारंपरिक पद्धतीने आणि
              उत्तम साहित्यापासून तयार केलेल्या
              खास पदार्थांची निवड.
            </p>

          </div>

        </section>


        {/* ================= CATEGORIES ================= */}

        <section className="gh-category-section">

          <div className="gh-category-container">

            <div className="gh-category-heading">

              <div>

                <span className="gh-section-label">
                  EXPLORE OUR COLLECTION
                </span>

                <h2>
                  तुमची आवडती <span>चव</span> निवडा
                </h2>

              </div>

              <p>
                प्रत्येक श्रेणीत घरगुती चव,
                गुणवत्ता आणि आपलेपणा जपलेला आहे.
              </p>

            </div>


            <div className="gh-category-grid">

              {categories.map((item) => (

                <article
                  key={item.category}
                  className="gh-category-card"
                  onClick={() =>
                    openCategory(item.category)
                  }
                >

                  {/* IMAGE */}

                  <div className="gh-category-image-wrap">

                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.marathi}
                        className="gh-category-image"
                        loading="lazy"
                      />
                    ) : (
                      <div className="gh-category-no-image">
                        Image unavailable
                      </div>
                    )}

                    <div className="gh-category-image-overlay" />

                    <span className="gh-category-count">
                      <FiPackage />
                      {item.count} Products
                    </span>

                  </div>


                  {/* CONTENT */}

                  <div className="gh-category-content">

                    <span className="gh-category-english">
                      {item.english}
                    </span>

                    <h3>
                      {item.marathi}
                    </h3>

                    <p>
                      {item.description}
                    </p>

                    <button
                      type="button"
                      className="gh-category-link"
                      onClick={(event) => {
                        event.stopPropagation();
                        openCategory(item.category);
                      }}
                    >
                      <span>
                        Products पहा
                      </span>

                      <FiArrowRight />

                    </button>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* ================= BOTTOM CTA ================= */}

        <section className="gh-category-bottom">

          <div className="gh-category-bottom-inner">

            <span>
              घरची चव • अस्सल घरगुती स्वाद
            </span>

            <h2>
              प्रत्येक घासात
              <br />
              <strong>घरची आठवण.</strong>
            </h2>

            <p>
              प्रेमाने बनवलेले पदार्थ आता तुमच्या घरापर्यंत.
            </p>

            <button
              type="button"
              onClick={() => navigate("/products")}
            >
              सर्व Products पहा
              <FiArrowRight />
            </button>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}