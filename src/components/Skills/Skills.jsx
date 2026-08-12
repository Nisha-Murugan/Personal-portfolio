import { skillsData } from "../../data/skillsData";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="mesh-blob blob-one"></div>
      <div className="mesh-blob blob-two"></div>

      <div className="skills-container">
        <p className="section-eyebrow skills-eyebrow" data-aos="fade-up">
          What I Know
        </p>
        <h2 className="skills-title" data-aos="fade-up">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="skills-subtitle" data-aos="fade-up">
          Technologies and tools I've been learning and building with.
        </p>

        <div className="skills-grid">
          {skillsData.map((group) => (
            <div className="skills-category" key={group.category} data-aos="fade-up">
              <h3 className="category-title">{group.category}</h3>
              <div className="skills-icon-grid">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div className="skill-circle" key={skill.name}>
                      <div className="skill-circle-icon">
                        <Icon />
                      </div>
                      <span className="skill-tooltip">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;