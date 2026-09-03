import React from "react";

const dishes = [
  {
    name: "घरची पूर्ण थाळी",
    description:
      "पनीर भाजी, पोळी, भात, आमटी, कोशिंबीर, पापड, लोणचं आणि गुलाबजाम.",
    price: "₹249",
    image:
      "https://images.openai.com/static-rsc-4/69Ug5fUinnfE7qe4BjQIEZW0IqqqYMX_NMZaycGXfTHnASGeGYLBFu0s4RMlWpJTm6K45E0-cPUz8YL6T63P7w6RYiDghqnxfiUqAo7LiMAYI0abLYODH-sAqkrhlNJKzR_DR1_a_Af-2tvHMcpcbvsco9Vyv6ao0VpEKKmTFUu4Fynx5NbvgnyrIsbn-EAL?purpose=fullsize",
  },

  {
    name: "खमंग थालीपीठ",
    description:
      "गरमागरम थालीपीठ, लोणी, दही आणि चटणीसोबत तयार केलेली खास मेजवानी.",
    price: "₹149",
    image:
      "https://images.openai.com/static-rsc-4/Yf7IZvx6xrYWdPBiH5GuZgI9EW1hqT5rN5blhiqVwLXlNysXma7xxX8g6ESG3LSKOrPJFblf8IQLr6Whbr9sIEOwCJGziF4fn2jT5ia83gaBv9xADX-dVsw_VbfcSKtgZrfrVVtnz8wYer9mcV8iFS_zZP0j4o53WM0YBn1H9FLSKNmUBDwi8QOYc7q1zJjr?purpose=fullsize",
  },

  {
    name: "भाकरीची थाळी",
    description:
      "पातळ भाकरी, पिठलं, कांदा, ठेचा आणि घरगुती चटणीची अस्सल चव.",
    price: "₹179",
    image:
      "https://images.openai.com/static-rsc-4/PEMUvkUpqc12t8ejmkKksysRRIufp2xJkJqXZAWmOhiAZ4jIvfheWD4bM_Ti3WSD8M-jeiD3FlWfhsD-gd6JpChvhR3BYvRe-G1N1Eg16KviVGQliVdISgBY54gBDWBqRQVQpwKG7NlLuLH6pWDAblq9EqctJJN6d61K-o20g8-tsKveT2Q1_obSQtsWaFUg?purpose=fullsize",
  },

  {
    name: "तुपाची पुरणपोळी",
    description:
      "केळीच्या पानावर वाढलेली गरम पुरणपोळी, भरपूर तूप आणि पारंपरिक चवीसोबत.",
    price: "₹129",
    image:
      "https://images.openai.com/static-rsc-4/XrcH9hKPaDXdgb3FHG-6hpkbEwT1M8jhFUFUPVGUIlDzlhg-iIdPF7J_CLgkx9_dP_8JZ71HwVjydcJvLTqpMwS3U1GBUTxsY6J3tjQ6bsAMiD9T3jNrDGW78z-Ho8lHx0sdnVmL0NX0XSAUSiKcpNo9jA_TLDa8Lp5sBSWtUqQMxY8mnZ_fz_vj4cIHIFPS?purpose=fullsize",
  },
];

export default function SpecialThalis() {
  return (
    <section className="thalis-section" id="thalis">
      <div className="thalis-container">

        {/* SECTION HEADING */}
        <div className="thalis-heading">

          <span className="thalis-label">
            OUR MENU
          </span>

          <h2>
            आजच्या ताटात
            <span> काय खास?</span>
          </h2>

          <p>
            घरच्या चवीने, मनापासून बनवलेले पदार्थ —
            प्रत्येक घासात आपलेपणा आणि प्रत्येक ताटात
            घरची आठवण.
          </p>

        </div>

        {/* DISH CARDS */}
        <div className="thalis-grid">

          {dishes.map((dish) => (
            <article className="thali-card" key={dish.name}>

              {/* IMAGE */}
              <div className="thali-image">

                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                />

                <span className="thali-price">
                  {dish.price}
                </span>

              </div>

              {/* CONTENT */}
              <div className="thali-card-content">

                <h3>{dish.name}</h3>

                <p>
                  {dish.description}
                </p>

                <button
                  type="button"
                  className="thali-button"
                >
                  ऑर्डर करा
                  <span>→</span>
                </button>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}