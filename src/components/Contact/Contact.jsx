import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import { socialLinks } from "../../data/socialLinks";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Contact.css";

const iconMap = { FaGithub, FaLinkedin, FaInstagram };

const EMAIL = "nishamurugan75@gmail.com";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="mesh-blob blob-one"></div>
      <div className="mesh-blob blob-two"></div>

      <div className="contact-container">
        <p className="section-eyebrow contact-eyebrow" data-aos="fade-up">
          Get In Touch
        </p>
        <h2 className="contact-title" data-aos="fade-up">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="contact-subtitle" data-aos="fade-up">
          Have an opportunity, a project idea, or just want to say hi? My inbox is always open.
        </p>

        <div className="contact-grid">
          <div className="contact-info" data-aos="fade-right">
            <div className="info-card">
              <span className="info-icon"><FaEnvelope /></span>
              <div>
                <h4>Email</h4>
                <p>{EMAIL}</p>
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon"><FaMapMarkerAlt /></span>
              <div>
                <h4>Location</h4>
                <p>Tamil Nadu, India</p>
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon"><FaPhoneAlt /></span>
              <div>
                <h4>Availability</h4>
                <p>Open to opportunities</p>
              </div>
            </div>

            <div className="contact-socials">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="social-icon"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-left">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
              ></textarea>
            </div>

            <button type="submit" className="btn-primary contact-submit">
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;