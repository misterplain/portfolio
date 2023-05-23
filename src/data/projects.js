import notepad from "../assets/notepad.png";
import bcnMin from "../assets/bcnMin.png";
import portfolio from "../assets/portfolio.png";
import boiler from "../assets/boiler.png";
import activeServer from "../assets/activeServer.png";
import fantasticfy from "../assets/fantasticfy.png";

//front end mentor
//https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ

const projects = [
  {
    title: "HP Notepad",
    description:
      "A notepad tool for myself and my colleagues to dynamically create rich-text email templates on the fly. The daily dashboard pulls from rapidAPI's to display forecast, daily horoscope, and 5 relevant news articles. Full stack MERN app - Nodemailer and Node.js / Express used for Contact form ",
    image: notepad,
    alt: "HP Notepad",
    link: "https://hpnotepad.onrender.com",
    githubRepo: "https://github.com/misterplain/hpNotePad",
    tags: ["React", "Material UI", "CKEditor"],
  },
  {
    title: "Active Server",
    description:
      "To get around the usage limits of the free tier of Render.com, where I am hosting my backend for all projects, I have created one server kept active by various cron-jobs. The server is a Node.js / Express application with MongoDB Atlas as the database.",
    image: activeServer,
    alt: "Active Server",
    githubRepo: "https://github.com/misterplain/activeServer",
    tags: ["MongoDB", "Node", "Mongoose"],
  },
  // {
  //   title: "bcnMinimalista",
  //   description:
  //     "Full stack MERN app - A platform for Barcelona locals to engage with their community and learn about waste reduction. React-Bootstrap used for UI, Yup and Formik used for form validation, Nodemail used for contact forms, Redux used for state management, JWT user authentication",
  //   image: bcnMin,
  //   alt: "bcnMinimalista",
  //   link: "https://bcnminimalista.onrender.com",
  //   githubRepo: "https://github.com/misterplain/bcnMin-v4",
  //   tags: ["React", "Formik", "Yup", "JWT"],
  // },
  {
    title: "Fantastic Snowboards",
    description:
      "A MERN app to display  available snowboard products. The product page contains an image carousel which dynamically changes price and stock information. ",
    image: fantasticfy,
    alt: "Fantastic Snowboards",
    link: "https://fantasticfy.onrender.com",
    githubRepo: "https://github.com/misterplain/fantasticfy",
    tags: ["React", "Material UI", "Redux", "Node.js", "MongoDB"],
  },
  {
    title: "Portfolio Site",
    description:
      "A portfolio site built with React and Material UI. Figma was used for the design and prototyping.",
    image: portfolio,
    alt: "portfolio site",

    githubRepo: "https://github.com/misterplain/portfolioV2",
    tags: ["React", "Material UI", "Figma"],
  },
  // {
  //   title: "boilerPlate",
  //   description:
  //     "A full stack MERN Boiler plate with built-in JWT authentication, Redux state management, Nodemailer contact functionality, and React-Bootstrap compatibility",
  //   image: boiler,
  //   alt: "boilerPlate",
  //   link: "https://mernboilerplate.onrender.com",
  //   githubRepo: "https://github.com/misterplain/boilerPlate-v2",
  //   tags: ["React", "Node", "MongoDB"],
  // },
];

export default projects;
