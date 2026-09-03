import React from "react";

const reasons = [
  {
    icon: "🏠",
    title: "अगदी घरची चव",
    text: "घरच्या स्वयंपाकासारखी साधी, प्रेमळ आणि मनाला भावणारी चव.",
  },
  {
    icon: "🌿",
    title: "ताजे साहित्य",
    text: "ताज्या आणि निवडक ingredients वापरून प्रत्येक पदार्थ तयार केला जातो.",
  },
  {
    icon: "👩‍🍳",
    title: "मनापासून बनवलेले",
    text: "प्रत्येक ताटामागे चांगल्या चवीसोबत प्रेम आणि काळजी असते.",
  },
  {
    icon: "✨",
    title: "गुणवत्तेची खात्री",
    text: "चव, स्वच्छता आणि गुणवत्तेला आम्ही नेहमीच प्राधान्य देतो.",
  },
];

export default function WhyGharChiChav() {
  return (
    <section className="why-section">
      <div className="why-container">

        {/* LEFT CONTENT */}
        <div className="why-content">

          <span className="why-label">
            WHY GHAR CHI CHAV
          </span>

          <h2>
            घरची चव
            <br />
            <span>वेगळीच असते...</span>
          </h2>

          <p className="why-intro">
            बाहेर कितीही चांगलं जेवलं तरी घरच्या जेवणाची
            सर कोणालाच येत नाही. त्याच घरच्या चवीची
            आठवण आम्ही तुमच्या प्रत्येक ताटातून जपतो.
          </p>

          <div className="why-list">
            {reasons.map((reason) => (
              <div className="why-item" key={reason.title}>

                <div className="why-icon">
                  {reason.icon}
                </div>

                <div className="why-item-text">
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="why-image-wrapper">

          <div className="why-image">
            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=90"
              alt="Homemade Indian food"
            />
          </div>

          <div className="why-image-note">
            <span>♥</span>
            <div>
              <strong>घरासारखं जेवण</strong>
              <small>मनापासून बनवलेलं</small>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}