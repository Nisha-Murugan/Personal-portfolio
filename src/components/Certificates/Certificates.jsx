import { useState } from "react";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import { certificatesData } from "../../data/certificatesData";
import "./Certificates.css";

const tabs = [
  { key: "internship", label: "Internships" },
  { key: "course", label: "Courses" },
];

const fallbackImg =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='280' viewBox='0 0 400 280'%3E%3Crect width='400' height='280' fill='%23131a2b'/%3E%3Ctext x='50%25' y='50%25' fill='%238b95ab' font-family='monospace' font-size='14' text-anchor='middle'%3EAdd certificate image%3C/text%3E%3C/svg%3E";

function Certificates() {
  const [activeTab, setActiveTab] = useState("internship");
  const [activeCert, setActiveCert] = useState(null);

  const filtered = certificatesData.filter(
    (cert) => cert.category === activeTab
  );

  return (
    <section id="certificates" className="certificates-section">
      <div className="mesh-blob blob-one"></div>
      <div className="mesh-blob blob-two"></div>

      <div className="certificates-container">
        <div className="certificates-header" data-aos="fade-up">
          <p className="section-eyebrow">My Achievements</p>
          <h2 className="section-title">
            Certificates & <span className="gradient-text">Internships</span>
          </h2>
        </div>

        <div className="cert-tabs" data-aos="fade-up">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`cert-tab ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="cert-grid">
          {filtered.map((cert, i) => (
            <button
              className="cert-card"
              key={cert.id}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              onClick={() => setActiveCert(cert)}
            >
              <div className="cert-image">
                <img
                  src={cert.image}
                  alt={cert.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = fallbackImg;
                  }}
                />
                <span className="cert-hover-overlay">View Certificate</span>
              </div>
              <div className="cert-info">
                <h4>{cert.title}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
                <span className="cert-date">{cert.date}</span>
              </div>
            </button>
          ))}

          {filtered.length === 0 && (
            <p className="cert-empty">No certificates added yet.</p>
          )}
        </div>
      </div>

      {activeCert && (
        <div className="cert-modal-backdrop" onClick={() => setActiveCert(null)}>
          <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal-header">
              <h4>{activeCert.title}</h4>
              <div className="cert-modal-actions">
                <a
                  href={activeCert.file || activeCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-modal-open"
                  aria-label="Open full size"
                >
                  <FaExternalLinkAlt />
                </a>
                <button
                  className="cert-modal-close"
                  onClick={() => setActiveCert(null)}
                  aria-label="Close"
                >
                  <FaTimes />
                </button>
              </div>
            </div>
            <div className="cert-modal-body">
              <img
                src={activeCert.image}
                alt={activeCert.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = fallbackImg;
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;