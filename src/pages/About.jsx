import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiHeart,
  FiHome,
  FiUsers,
  FiAward,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function OurStory() {
  return (
    <>
      <Navbar />

      <main className="our-story-page">
        {/* HERO */}
        <section className="story-hero">
          <div className="story-container">
            <div className="story-hero-content">
              <span className="story-tag">OUR STORY</span>

              <h1>
                घरच्या चवीची
                <br />
                <span>एक सुंदर गोष्ट...</span>
              </h1>

              <p>
                प्रत्येक घराची एक खास चव असते. त्या चवीत आठवणी असतात,
                प्रेम असतं आणि आपल्या माणसांची ऊब असते. हीच घरची चव
                प्रत्येकापर्यंत पोहोचवण्याच्या छोट्याशा स्वप्नातून
                "घरची चव" ची सुरुवात झाली.
              </p>

              <Link to="/products" className="story-primary-btn">
                आमची उत्पादने पहा
                <FiArrowRight />
              </Link>
            </div>

            <div className="story-hero-visual">
              <div className="story-image-main">
                <img
                  src="https://images.openai.com/static-rsc-4/JC_MxtpJfIxKQw5TyTygH8uK8Nim4NiHRPGO405lFZjdtJuBv4wcrhgG7sEFmrel-c7ETAXbUH4_1ZiBUjo-yDsH4OZuK4A2QJY_NMNudaQfrYVePHYuSmZVE_D-U8iMvrBlDxoe04-jdC93p7qbKUNBW1pTzc_zBELO2NDQvyozOlqcXs_BTYYuS0IF0Tgc?purpose=fullsize"
                  alt="Homemade food"
                />
              </div>

              <div className="story-floating-card">
                <FiHeart />
                <div>
                  <strong>Made With Love</strong>
                  <span>घरच्या हातची चव</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR BEGINNING */}
        <section className="story-beginning">
          <div className="story-container story-two-column">
            <div className="story-photo-card">
              <img
                src="https://images.openai.com/static-rsc-4/9FDLBVoOovAVYU5NLNfti2HV5ur2luPXyPeL12-xLBWDpHmo0PO3EsYDHXmaOdlhIDoZ04sXR480PCklC2FmjA-FmmTaPTbTLjWEtJ-c9f36oyEHYbImY3wDonSShIlVEHF9PhbKsSPUBFZ5zTWnV_xce7tCpynNQojVIpIz9Ia4Q6kiTguC_AyBrtBjDgzS?purpose=fullsize"
                alt="Traditional homemade food"
              />

              <div className="story-photo-label">
                <span>Since</span>
                <strong>2020</strong>
              </div>
            </div>

            <div className="story-text">
              <span className="story-tag">HOW IT STARTED</span>

              <h2>
                एका छोट्याशा
                <br />
                <span>स्वप्नापासून...</span>
              </h2>

              <p>
                लहानपणापासून घरच्या स्वयंपाकघरात बनणाऱ्या पदार्थांचा
                सुगंध आणि चव आमच्या मनात कायमची घर करून राहिली.
                आजीच्या हातची चटणी, आईच्या हातची भाकरी आणि सणासुदीला
                बनणारे पारंपरिक पदार्थ हीच आमची खरी प्रेरणा.
              </p>

              <p>
                बदलत्या काळात आपण कितीही पुढे गेलो तरी आपल्या घरच्या
                चवीची जागा कोणतीही गोष्ट घेऊ शकत नाही. म्हणूनच
                पारंपरिक चव, घरगुतीपणा आणि उत्तम गुणवत्ता यांना
                एकत्र आणण्याचा आम्ही प्रयत्न केला.
              </p>

              <div className="story-signature">
                <span>प्रेमाने बनवलेलं,</span>
                <strong>घरची चव ❤️</strong>
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="story-values">
          <div className="story-container">
            <div className="story-heading-center">
              <span className="story-tag">WHAT WE BELIEVE</span>

              <h2>
                आमच्यासाठी चव म्हणजे
                <br />
                <span>फक्त चव नाही...</span>
              </h2>

              <p>
                प्रत्येक पदार्थामागे एक भावना, एक आठवण आणि खूप सारं प्रेम
                असतं.
              </p>
            </div>

            <div className="story-values-grid">
              <div className="story-value-card">
                <div className="story-icon">
                  <FiHeart />
                </div>

                <h3>प्रेमाने बनवलेले</h3>

                <p>
                  प्रत्येक पदार्थ घरच्या स्वयंपाकासारखाच प्रेमाने आणि
                  आपुलकीने तयार केला जातो.
                </p>
              </div>

              <div className="story-value-card">
                <div className="story-icon">
                  <FiHome />
                </div>

                <h3>घरची चव</h3>

                <p>
                  पारंपरिक पाककृती आणि आपल्या घरची ओळखीची चव जपण्याचा
                  आमचा प्रयत्न असतो.
                </p>
              </div>

              <div className="story-value-card">
                <div className="story-icon">
                  <FiAward />
                </div>

                <h3>उत्तम गुणवत्ता</h3>

                <p>
                  चांगले साहित्य, स्वच्छता आणि गुणवत्तेला आम्ही नेहमीच
                  सर्वात जास्त महत्त्व देतो.
                </p>
              </div>

              <div className="story-value-card">
                <div className="story-icon">
                  <FiUsers />
                </div>

                <h3>आपलं कुटुंब</h3>

                <p>
                  आमच्याकडून खरेदी करणारा प्रत्येक ग्राहक हा आमच्या
                  कुटुंबाचा एक भाग आहे.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* STORY QUOTE */}
        <section className="story-quote-section">
          <div className="story-container">
            <div className="story-quote-box">
              <div className="quote-mark">“</div>

              <h2>
                जिथे चवीसोबत
                <br />
                <span>आठवणीही मिळतात.</span>
              </h2>

              <p>
                घरची चव म्हणजे आपल्या माणसांसोबत बसून खाल्लेल्या
                त्या एका घासाची आठवण.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="story-cta">
          <div className="story-container">
            <div className="story-cta-content">
              <span className="story-tag">COME, TASTE THE LOVE</span>

              <h2>
                तुमच्या घरातही
                <br />
                <span>घरची चव आणा.</span>
              </h2>

              <p>
                आमच्या घरगुती आणि पारंपरिक पदार्थांची चव आजच अनुभवून
                पहा.
              </p>

              <Link to="/products" className="story-primary-btn">
                Shop Now
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}