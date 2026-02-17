import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "Service_nisha123",        // Service ID
        "template_909ti1s",        // Template ID
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // 🔐 safer
      )
      .then(
        () => {
          alert("✅ Message Sent Successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error(error);
          alert("❌ Message Failed. Try again!");
          setLoading(false);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-heading">CONTACT ME</h2>

      {/* Email */}
      <a
        href="mailto:nishamurugan75@gmail.com"
        className="contact-email"
      >
        nishamurugan75@gmail.com
      </a>

      {/* Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
      >
        <div className="form-row">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
        ></textarea>

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
