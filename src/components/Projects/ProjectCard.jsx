import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <div className="project-card" data-aos="fade-up">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="overlay-icon"
            aria-label="GitHub repository"
          >
            <FaGithub />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="overlay-icon"
            aria-label="Live demo"
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        <div className="project-tech">
          {project.tech.map((t) => (
            <span className="tech-tag" key={t}>{t}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
            <FaGithub /> Code
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live">
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;