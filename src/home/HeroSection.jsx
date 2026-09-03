import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const slides = [
  {
    image:
      "https://media.assettype.com/freepressjournal/2022-12/911504a3-7625-4e20-91bc-27a2f3dfb056/Maharashtrian_Thali_by_Varun_Inamdar.jpg",
    eyebrow: "अस्सल महाराष्ट्रीय चव",
    title: "घरच्या चवीची",
    highlight: "पूर्ण थाळी.",
    description:
      "भाकरी, भाजी, आमटी, भात, लोणचं, चटणी आणि गोड — मनापासून वाढलेलं घरचं जेवण.",
  },

  {
    image:
      "https://madhurasrecipe.com/wp-content/uploads/2022/03/puranpoli_thali_1.jpg",
    eyebrow: "सणासुदीची खास थाळी",
    title: "पुरणपोळीचा",
    highlight: "गोडवा.",
    description:
      "गरम पुरणपोळी, वरण-भात, भाजी आणि पारंपरिक महाराष्ट्रीय चवींची सुंदर मेजवानी.",
  },

  {
    image:
      "https://portfolio.investmentguruindia.com/uploads/news/food%20and-beverage-tourism_27032026.jpg",
    eyebrow: "महाराष्ट्राची मेजवानी",
    title: "एक थाळी,",
    highlight: "अनेक चवी.",
    description:
      "पारंपरिक पदार्थांची भरगच्च थाळी — प्रत्येक घासात महाराष्ट्राची ओळख.",
  },

  {
    image:
      "https://www.indiablooms.com/storage/assets/n/2022/19d19b994580d5e18fb3ffb1d799a24a.JPG",
    eyebrow: "खास घरगुती जेवण",
    title: "प्रेमाने वाढलेली",
    highlight: "महाराष्ट्रीय थाळी.",
    description:
      "अनेक भाज्या, आमटी, भात, पोळी आणि चटण्यांनी सजलेली भरभरून थाळी.",
  },

  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Ce_grayscale%2Cc_fit/FOOD_CATALOG/IMAGES/CMS/2025/12/12/604c72bf-b06e-4287-ba84-773debe1d443_c4bfc03e-af41-4514-b080-14a799f42d9b.jpg",
    eyebrow: "गावरान चवीची आठवण",
    title: "पिठलं-भाकरीची",
    highlight: "खरी मजा.",
    description:
      "ज्वारीची भाकरी, पिठलं, भात, ठेचा, कांदा आणि घरगुती चवीचा साधा पण खास अनुभव.",
  },
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  const previousSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setActiveSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const current = slides[activeSlide];

  return (
    <section className="gh-hero">

      {/* ALL SLIDES */}
      <div className="gh-hero-slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`gh-hero-slide ${
              index === activeSlide ? "is-active" : ""
            }`}
            style={{
              backgroundImage: `url("${slide.image}")`,
            }}
          />
        ))}
      </div>

      {/* OVERLAY */}
      <div className="gh-hero-overlay" />

      {/* MAIN CONTENT */}
      <div className="container gh-hero-container">
        <div className="gh-hero-content" key={activeSlide}>

          <span className="gh-hero-eyebrow">
            {current.eyebrow}
          </span>

          <h1>
            {current.title}
            <br />
            <em>{current.highlight}</em>
          </h1>

          <p>{current.description}</p>

          <div className="gh-hero-actions">
            <Link
              to="/products"
              className="gh-btn gh-btn-primary"
            >
              Menu पाहा
              <FiArrowRight />
            </Link>

            <Link
              to="/categories"
              className="gh-btn gh-btn-outline"
            >
              सगळे पदार्थ
            </Link>
          </div>

        </div>
      </div>

      {/* SLIDE ARROWS */}
      <button
        type="button"
        className="gh-slider-arrow gh-slider-prev"
        onClick={previousSlide}
        aria-label="Previous slide"
      >
        <FiChevronLeft />
      </button>

      <button
        type="button"
        className="gh-slider-arrow gh-slider-next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <FiChevronRight />
      </button>

      {/* SLIDE INDICATORS */}
      <div className="gh-slider-indicators">
        {slides.map((slide, index) => (
          <button
            type="button"
            key={index}
            className={
              index === activeSlide
                ? "gh-slider-dot active"
                : "gh-slider-dot"
            }
            onClick={() => setActiveSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* BOTTOM INFO */}
      <div className="gh-hero-bottom">
        <div className="container gh-hero-bottom-inner">

          <span>घरच्या पद्धतीने</span>

          <span className="gh-separator">•</span>

          <span>ताजे पदार्थ</span>

          <span className="gh-separator">•</span>

          <span>अस्सल महाराष्ट्रीय चव</span>

          <span className="gh-separator">•</span>

          <span>प्रेमाने तयार</span>

        </div>
      </div>

    </section>
  );
}