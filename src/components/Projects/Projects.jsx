import { projectsData } from "../../data/projectsData";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="mesh-blob blob-one"></div>
      <div className="mesh-blob blob-two"></div>

      <div className="projects-container">
        <p className="section-eyebrow projects-eyebrow" data-aos="fade-up">
          My Work
        </p>
        <h2 className="projects-title" data-aos="fade-up">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="projects-subtitle" data-aos="fade-up">
          A few projects I've built while learning and practicing the MERN stack.
        </p>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;