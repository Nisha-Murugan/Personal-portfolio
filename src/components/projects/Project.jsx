import React from "react";
import "./Project.css";

import regImg from "../../assets/registration.png";
import expenseImg from "../../assets/expense.png";
import mathImg from "../../assets/math.jpg";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-heading">PROJECTS</h2>

      <div className="projects-container">

        {/* Project 1 */}
        <a
          href=" https://nisha-murugan.github.io/RegistrationPage/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <img src={regImg} alt="Registration Page" />
          <h3>Registration Page</h3>
          <p>
            A responsive registration form created using HTML and CSS with
            clean UI, proper alignment, and user-friendly structure.
          </p>
          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
          </div>
        </a>

        {/* Project 2 */}
        <a
          href= "https://nisha-murugan.github.io/Expense-Tracker/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <img src={expenseImg} alt="Expense Tracker" />
          <h3>Expense Tracker</h3>
          <p>
            A web-based expense tracker using HTML, Bootstrap, and JavaScript
            that allows users to add and manage daily expenses dynamically.
          </p>
          <div className="project-tech">
            <span>HTML</span>
            <span>Bootstrap</span>
            <span>JavaScript</span>
          </div>
        </a>

        {/* Project 3 */}
        <a
          href=" https://nisha-murugan.github.io/Mathmentaltrainer/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <img src={mathImg} alt="Mathematical Trainer" />
          <h3>Mathematical Trainer</h3>
          <p>
            A Java-based console application that helps users practice basic
            arithmetic operations and improve calculation skills.
          </p>
          <div className="project-tech">
            <span>Java</span>
          </div>
        </a>

      </div>
    </section>
  );
};

export default Projects;
