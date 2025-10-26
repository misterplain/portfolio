import notepad from "../assets/notepad.png";
import portfolio from "../assets/portfolio.png";
import boilerPlate from "../assets/boilerPlate.png";
import fantasticfy from "../assets/fantasticfy.png";

const projects = [
  {
    title: "E-Commerce Boilerplate",
    description:
      "A MERN stack e-commerce template designed for scalability. Ideal as a starting off point with Admin functionality, OAuth login, and custom Material UI theming, this clone-ready base ensures rapid deployment with optimized features. Customize to fit your needs. ",
    image: boilerPlate,
    alt: "E-Commerce Boilerplate",
    link: "https://e-commerce-mern-eryu.onrender.com",
    githubRepo: "https://github.com/misterplain/boilerPlate-MERN",
    tags: ["MERN Stack", "Material UI", "Passport OAuth", "Cloudinary"],
  },
  {
    title: "HP Notepad",
    description:
      "A notepad tool for myself and my colleagues to dynamically create rich-text email templates on the fly. The daily dashboard pulls from rapidAPI's to display forecast, daily horoscope, and 5 relevant news articles. Nodemailer and Node.js / Express used for Contact form ",
    image: notepad,
    alt: "HP Notepad",
    link: "https://hpnotepad.onrender.com",
    githubRepo: "https://github.com/misterplain/hpNotePad",
    tags: ["MERN Stack", "Material UI", "CKEditor", "Redux"],
  },
  {
    title: "Fantastic Snowboards",
    description:
      "A MERN app to display available snowboard products. The product page contains an image carousel which dynamically changes price and stock information. ",
    image: fantasticfy,
    alt: "Fantastic Snowboards",
    link: "https://fantasticfy.onrender.com",
    githubRepo: "https://github.com/misterplain/fantasticfy",
    tags: ["MERN Stack", "Material UI", "Redux"],
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
];

export default projects;
