import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowDown } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { socialLinks } from "../../data/socialLinks";
import "./Home.css";

const iconMap = { FaGithub, FaLinkedin, FaInstagram };

const roles = [
  "Software Developer",
  "React Enthusiast",
  "MERN Stack Developer",
  "Problem Solver",
];

function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 40 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1400);
        }
      } else {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="home-section">
      <div className="mesh-blob blob-one"></div>
      <div className="mesh-blob blob-two"></div>

      <div className="home-container">
        <div className="home-text" data-aos="fade-right">
          <p className="section-eyebrow home-eyebrow">Hello, I'm</p>
          <h1 className="home-name">
            NISHA MURUGAN<span className="dot">.</span>
          </h1>
          <h2 className="home-role">
            <span className="gradient-text">{displayText}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="home-desc">
            I build clean, fast, and interactive web experiences —
            turning ideas into responsive interfaces with React and
            modern tooling.
          </p>

          <div className="home-actions">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="/Nisha-Resume.pdf" className="btn-secondary" download>
              <HiOutlineDownload /> Resume
            </a>
          </div>

          <div className="home-socials">
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

        <div className="home-image" data-aos="fade-left">
          <div className="hero-gif-frame">
            <img
              src="/coding.gif"
              alt="Coding animation"
              className="hero-gif"
              width="420"
              height="236"
            />
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-indicator" aria-label="Scroll down">
        <FaArrowDown />
      </a>
    </section>
  );
}

export default Home;