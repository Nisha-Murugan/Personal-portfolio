import React from "react";
import "./About.css";
import profile_img from "../../assets/Profilee.jpeg";
import resume from "../../assets/Nisha_resume.pdf";

const About = () => {
  return (
    // 🔥 id="about" already correct
    <section className="about" id="about">
      <div className="about-container">

        {/* TITLE */}
        <h1 className="about-title">ABOUT ME</h1>

        <div className="about-content">

          {/* LEFT IMAGE */}
          <div className="about-left">
            <div className="image-wrapper">
              <img src={profile_img} alt="Nisha - Software Developer" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="about-right">
            <h2>
              Hello, I'm <span className="name-highlight">NISHA</span>
            </h2>

            <p>
              I’m a passionate <strong>Software Developer</strong> who enjoys
              building clean, simple, and user-friendly web applications.
            </p>

            <p>
              I focus mainly on <strong>frontend development</strong> and love
              learning new technologies to improve my skills and create
              meaningful digital experiences.
            </p>

           

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
