import notepad from "../assets/notepad.png";
import bcnMin from "../assets/bcnMin.png";
import portfolio from "../assets/portfolio.png";
import boiler from "../assets/boiler.png";

const projects = [
    {
      title: "HP Notepad",
      description:
        "A notepad tool for myself and my colleagues to dynamically create email templates on the fly. The daily dashboard pulls from rapidAPI's to display forecast, daily horoscope, and 5 relevant news articles. Full stack MERN app - Nodemailer and Node.js / Express used for Contact form ",
      image: notepad,
      alt: "HP Notepad",
      link: "https://hpnotepad.onrender.com",
      githubRepo: "https://github.com/misterplain/hpNotePad",
      tags: ["React", "Node", "MongoDB"],
    },
    {
      title: "bcnMinimalista",
      description:
        "Full stack MERN app - A platform for Barcelona locals to engage with their community and learn about waste reduction. React-Bootstrap used for UI, Yup and Formik used for form validation, Nodemail used for contact forms, Redux used for state management, JWT user authentication",
      image: bcnMin,
      alt: "bcnMinimalista",
      link: "https://bcnminimalista.onrender.com",
      githubRepo: "https://github.com/misterplain/bcnMin-v4",
      tags: ["React", "Node", "MongoDB"],
    },
    {
      title: "Portfolio Site",
      description:
        "A full stack MERN Boiler plate with built-in JWT authentication, Redux state management, Nodemailer contact functionality, and React-Bootstrap compatibility",
      image: portfolio,
      alt: "portfolio site",
      githubRepo: "https://github.com/misterplain/portfolioV2",
      tags: ["React", "Node", "MongoDB"],
    },
    {
      title: "boilerPlate",
      description:
        "A full stack MERN Boiler plate with built-in JWT authentication, Redux state management, Nodemailer contact functionality, and React-Bootstrap compatibility",
      image: boiler,
      alt: "bcnMinimalista",
      link: "https://mernboilerplate.onrender.com",
      githubRepo: "https://github.com/misterplain/boilerPlate-v2",
      tags: ["React", "Node", "MongoDB"],
    },
  ];

  export default projects;