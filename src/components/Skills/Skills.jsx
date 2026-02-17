import React from "react";
import { skills } from "./Skills1";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-heading">SKILLS</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            
            <div
              className="skill-circle"
              style={{ "--glow-color": skill.color }}
            >
              <div
                className="skill-icon"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
            </div>

            <h3 className="skill-name">{skill.name}</h3>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
