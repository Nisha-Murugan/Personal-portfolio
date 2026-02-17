import React from "react";
import "./Hero.css";
import engineer_image from "../../assets/gifff.gif";
import SocialLinks from "../SocialLinks/SocialLinks";
import resume from "../../assets/Nisha_resume.pdf";

const Hero = () => {
  return (
    // 🔥 id="home" ADDED
    <section className="hero" id="home">

      {/* LEFT SIDE */}
      <div className="hero-left fade-in">
        <h1>
          Hello, I'm <span className="name">NISHA</span>
        </h1>

        <h2 className="slide-up">Software Developer</h2>

        {/* Social Icons */}
        <SocialLinks />

        {/* Resume Button */}
        <a href={resume} download className="resume-btn">
          Download Resume
        </a>
      </div>

      {/* RIGHT SIDE */}
      <div className="hero-right zoom-in">
        <img src={engineer_image} alt="Profile" />
      </div>

    </section>
  );
};

export default Hero;
