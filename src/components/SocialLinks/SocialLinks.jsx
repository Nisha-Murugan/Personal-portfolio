import React from "react";
import "./SocialLinks.css";
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="social-icons">
      <a
        href="https://www.instagram.com/_nisha_.m._"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>

      <a
        href="https://github.com/Nisha-Murugan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/nisha-m-79b65727b"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>

      {/* EMAIL ICON */}
      <a href="mailto:nishamurugan@example.com">
        <FaEnvelope />
      </a>
    </div>
  );
};

export default SocialLinks;
