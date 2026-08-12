import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiVercel,
  SiPostman,
  SiRender,
} from "react-icons/si";

export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "React JS", icon: FaReact },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
    ],
  },
  {
    category: "Database & Languages",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "SQL", icon: SiMysql },
      { name: "Java", icon: FaJava },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "Postman", icon: SiPostman },
      { name: "Render", icon: SiRender },
    ],
  },
];