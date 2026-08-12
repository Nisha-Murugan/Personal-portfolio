import { FaMapMarkerAlt, FaGraduationCap, FaCode } from "react-icons/fa";
import profilePic from "../../assets/profile.jpg";
import "./About.css";

const stats = [
  { label: "Years Learning", value: "2+" },
  { label: "Projects Built", value: "10+" },
  { label: "Technologies", value: "8+" },
];

const highlights = [
  {
    icon: <FaCode />,
    title: "What I Do",
    text: "I craft responsive, accessible web interfaces using React, focusing on clean code and smooth user experiences.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Background",
    text: "Self-driven learner constantly exploring modern frontend tooling, design systems, and best practices.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Based In",
    text: "Tamil Nadu, India — open to remote opportunities and collaborations worldwide.",
  },
];

function About() {
  return (
    
    <section id="about" className="about-section">
      <div className="mesh-blob blob-one"></div>
      <div className="mesh-blob blob-two"></div>

      <div className="about-container">
        <div className="about-image" data-aos="fade-right">
          <div className="glow-ring">
            <img src={profilePic} alt="Nisha Murugan" />
          </div>
        </div>

        <div className="about-text" data-aos="fade-left">
          <p className="section-eyebrow about-eyebrow">Get To Know</p>
          <h2 className="about-title">
            About <span className="gradient-text">Me</span>
          </h2>

          <p className="about-desc">
            Hi, I'm Nisha — a frontend developer who loves turning ideas
            into fast, interactive, and visually engaging web experiences.
            I enjoy working with React and modern tooling to build
            interfaces that feel as good as they look.
          </p>

          <div className="about-stats">
            {stats.map((s) => (
              <div className="stat-card" key={s.label}>
                <h3 className="gradient-text">{s.value}</h3>
                <p>{s.label}</p>
              </div>
            ))}
          </div>

          <div className="about-highlights">
            {highlights.map((h) => (
              <div className="highlight-card" key={h.title}>
                <div className="highlight-icon">{h.icon}</div>
                <div>
                  <h4>{h.title}</h4>
                  <p>{h.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="about-actions">
            <a href="#contact" className="btn-primary">Let's Talk</a>
            <a href="#skills" className="btn-secondary">Explore Skills</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;