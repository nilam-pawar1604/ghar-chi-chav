
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary frontend submit
    setSent(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSent(false);
    }, 4000);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* Heading */}
        <div className="contact-heading">
          <span>GET IN TOUCH</span>
          <h1>Let's Work Together</h1>
          <p>
            Have a project in mind or want to discuss an opportunity?
            Feel free to reach out. I'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid">

          {/* Contact Information */}
          <div className="contact-info">

            <h2>Contact Me</h2>

            <p className="contact-description">
              I'm always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>

            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={22} />
              </div>

              <div>
                <span>Email</span>
                <a href="mailto:nilampawar@example.com">
                  nilampawar@example.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={22} />
              </div>

              <div>
                <span>Phone</span>
                <a href="tel:+910000000000">
                  +91 00000 00000
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={22} />
              </div>

              <div>
                <span>Location</span>
                <p>Pune, Maharashtra, India</p>
              </div>
            </div>

          </div>

          {/* Form */}
          <div className="contact-form-box">

            <form onSubmit={handleSubmit}>

              <div className="form-row">

                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit">
                <span>Send Message</span>
                <Send size={18} />
              </button>

              {sent && (
                <div className="success-message">
                  ✓ Message sent successfully!
                </div>
              )}

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}

