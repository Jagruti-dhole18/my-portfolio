import project1 from '../assets/project-1.jpg'
import project2 from '../assets/project-2.jpg'
import project3 from '../assets/project-3.jpg'
import project4 from '../assets/project-4.jpg'

export const HERO_CONTENT ="I’m a passionate frontend developer and computer science student with a strong interest in building interactive, user-friendly web interfaces. I started with core technologies like HTML, CSS, JavaScript, MySQL, and Java GUI, building a solid foundation in both frontend and backend basics. I’ve also worked with C and created visually engaging apps. Currently, I’m diving into the MERN stack to expand my skills and connect design with functionality.";

export const ABOUT_TEXT = "I’m a passionate frontend developer and computer science student with a strong foundation in HTML, CSS, JavaScript, MySQL, C, and Java GUI development. Currently diving into the MERN stack to grow my full stack skills. I enjoy building clean, responsive web interfaces and learning through hands-on projects.I also hold a German A1 certification from a R. C. Patel institute of Technology, reflecting my interest in languages and continuous learning. Always curious, always building!";

export const EXPERIENCES = [
    {
        year: "2024 - current",
        role: "Frontend Developer",
        company: "Akatsuki Coding Club",
        description: "I’m an active member of the Akatsuki Coding Club, where I learn new coding skills, work on projects, and take part in events. Being part of the club helps me improve my problem-solving, teamwork, and creativity. It’s a great place to learn and grow with other students who love technology.",
        technologies: ["HTML", "CSS", "Javascript","Java","mySQL"],
      },
        // {
        //     year: " sep-2024 - nov-2024",
        //     role: "Intern",
        //     company: "Nextech Infosystems",
        //     description: "Designed and developed various types of UI using JavaFX and also get more information about how JavaFX works in Applications although I am not able to create fully developed applications but i got basic idea about JavaFX",
        //     technologies: ["JavaFX"],
        // },
];

export const PROJECTS = [
  {
    title: "Hospital Management System",
    image: project1,
    description:
      "This is an application developed using Java GUI (Swing components) and MySQL as the backend database. The system helps manage hospital operations like patient registration, appointments, inventory, and billing.",
    technologies: ["Java(GUI)","MySQL","JDBC"],
  },
  {
    title: "Book My Show",
    image: project2,
    description:
      "A movie ticket booking application where users can browse movies, view showtimes, select seats, and book tickets.",
    technologies: ["Java(GUI)","MySQL","JDBC"],
  },
  {
    title: "To Do List",
    image: project3,
    description:
    "A simple and responsive to-do list application that lets users add, delete, and mark tasks as completed.",
    technologies: ["HTML", "CSS", "React.Js"],
  },
  {
    title: "portfolio Website",
    image: project4,
    description:
    "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", " Tailwind CSS"],
  },
];

export const CONTACT = {
  address: "10 A, Mahatma fule nagar shingave road , shirpur ",
  phoneNo: "+91 9322013177 ",
  email: "jagrutidhole18@gmail.com",
};