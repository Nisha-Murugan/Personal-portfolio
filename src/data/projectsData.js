import chatImg from "../assets/chat.png";
import expenseImg from "../assets/expense.png";
import apartmentImg from "../assets/apartment.png";

export const projectsData = [
  {
    id: 1,
    title: "Chat Application",
    description: "A real-time chat application built with the MERN stack, enabling instant messaging between users.",
    image: chatImg,
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Nisha-Murugan/Chat-Application",
    live: "https://chat-application-wheat-psi.vercel.app/",
  },
  {
    id: 2,
    title: "Expense Tracker",
    description: "A web app to track daily expenses and income, with a clean dashboard to visualize spending habits.",
    image: expenseImg,
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Nisha-Murugan/Expense-Tracker",
    live: "https://expense-tracker-sij6.vercel.app/",
  },
  {
    id: 3,
    title: "Apartease",
    description: "An apartment management platform that simplifies listings, bookings, and communication for residents.",
    image: apartmentImg,
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Nisha-Murugan/Apartease",
    live: "https://apartease-psi.vercel.app/",
  },
];