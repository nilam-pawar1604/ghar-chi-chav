import React from "react";

export default function AboutIntro() {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* LEFT IMAGE */}
        <div className="about-visual">

          <div className="about-image-main">
            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=90"
              alt="Homemade Indian food"
            />
          </div>

          <div className="about-floating-card">
            <span className="about-card-icon">♥</span>

            <div>
              <strong>घरची चव</strong>
              <small>प्रेमाने बनवलेलं</small>
            </div>
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">

          <span className="about-label">
            OUR STORY
          </span>

          <h2>
            जेवण फक्त
            <br />
            <span>जेवण नसतं...</span>
          </h2>

          <p className="about-highlight">
            त्यात घराची आठवण, माणसांची आपुलकी
            आणि चवीसोबत जोडलेल्या असंख्य आठवणी असतात.
          </p>

          <p>
            <strong>Ghar Chi Chav</strong> ही कल्पना याच
            भावनेतून जन्माला आली. आपल्या घरच्या स्वयंपाकाची
            खरी चव, ताजेपणा आणि प्रेम प्रत्येक ताटात
            पोहोचवण्याचा आमचा छोटासा प्रयत्न.
          </p>

          <p>
            पारंपरिक पद्धतीने तयार केलेले पदार्थ,
            निवडक साहित्य आणि प्रत्येक पदार्थामागची
            मनापासून केलेली मेहनत — हीच आमची ओळख.
          </p>

          <div className="about-signature">
            <span>घरासारखं जेवण.</span>
            <span>मनापासून बनवलेलं.</span>
          </div>

        </div>

      </div>
    </section>
  );
}