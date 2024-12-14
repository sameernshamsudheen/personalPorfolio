import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "CEO",
    company_name: "Vaazha app",

    date: "2019 -  2022",
    points: [
      "Led the development of Vazhaa, an innovative app aimed at empowering farmers by providing a platform to upskill their knowledge, collaborate with landlords for land acquisition, and teach modern farming techniques. Focused on transforming farming into a respected, branded, white-collar profession through education, collaboration, and community engagement.",
    ],
  },
  {
    title: "Software engineer ",
    company_name: "Logicplum",

    date: "2022 -2023",
    points: [
      "Skilled in leading frameworks as React JS to build high-quality, scalable and reusable components and Front-end solution. Work with UI Frameworks like ANT Design and SASS for CSS The back-end use of Node JS, Express JS, MongoDB and Mongoose, the complete MERN Stack to provide RESTful API",
    ],
  },
  {
    title: "Software Engineer ",
    company_name: "Hyperblox",

    iconBg: "#b7e4c7",
    date: " 2023 MAY - 2023 OCT",
    points: [
      "My expertise in React.js, a powerful and widely-used JavaScript library for building user interfaces, allows me to craft interactive and responsive front-end applications that seamlessly integrate with IoT devices. I am well-versed in harnessing the capabilities of React to create user-friendly interfaces that provide real-time data visualization to  IoT systems",
    ],
  },
  {
    title: "software Engineer",
    company_name: "P2DTS",

    date: "2023  -  2024",
    points: [
      "Led the development of a B2C Learning Management System (LMS) application designed for online course delivery and management. Utilized React.js for building a dynamic and responsive user interface, integrated Redux Toolkit for efficient state management, and applied Tailwind CSS for a modern, mobile-first design.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/sameernshamsudheen",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/sameershamsudheen/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "benatkinson method",
    description:
      "learning management system for  equestrian sports using react redux-tool node.js strapi.js ",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Multi vendor ecommerce  Backend",
    description:
      "Created a Backend App using  express.js node.js where different vendors can  signup and login upload there products users can  buy this  products, database used is mongodb,redis for caching and razorpay for payment.this project includes adavanced logging and error handling  ",
    link: "https://github.com/sameernshamsudheen/multivendorBackend",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "job portal",
    description:
      "Created a job portal app  with  react supabase and  clerk authentication",
    link: "https://github.com/sameernshamsudheen/jobportal",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Single Vendor Learning management system",
    description: "Backend application with node.js and express.js ",
    link: "https://github.com/sameernshamsudheen/lmsbackendproject",
  },
];
