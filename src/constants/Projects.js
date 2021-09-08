import Project1 from "../assets/projects/SETHacks.png"
import Project2 from "../assets/projects/ENergize.png"
import Project3 from "../assets/projects/Shopperz.png"
import Project4 from "../assets/projects/PersonalWebsite.png"
import Project5 from "../assets/projects/CaseMap.png"

export const PROJECTS = [
  {
    title: "SET.Hacks()",
    description:
      "Through SET.Hacks(), I collaborated with a team of developers to re-brand the current website and establish a beginner-friendly experience for participating hackers. As an organizer, I had an unforgettable experience in making SET.Hacks() a success and acquired many skills through building the website.",
    stack: ["TypeScript", "React", "Next.js", "Styled-Components"],
    repo: "https://github.com/SET-Hacks-Dev/set-hacks",
    link: "https://www.sethacks.ca/",
    image: Project1,
  },
  {
    title: "ENergize",
    description:
      "Originally as an idea for a Hackathon, ENergize ended up being a project I developed over the summer. It's a full stack application that allows users to create recipes and track them in terms of its environmental sustainability and nutritional benefits. Try creating a recipe and see the ENergize score you'll receive.",
    stack: ["React", "Firebase", "Python", "OpenAI API", "Beautiful Soup"],
    repo: "https://github.com/Jasspie/ENergize",
    link: "https://energize.netlify.app/",
    image: Project2,
  },
  {
    title: "Shopperz",
    description:
      "As a tech enthusiast, I created Shopperz, a MERN web application that serves as a mock e-commerce platform for users to purchase various devices. Through building this project, I learned how to apply Node.js and MongoDB towards authenticating users with JSON Web Tokens as well as how to handle payments with the Stripe API.",
    stack: ["Node.js", "Express", "MongoDB", "Stripe API", "React", "Redux"],
    repo: "https://github.com/Jasspie/Shopperz",
    image: Project3,
  },
  {
    title: "Personal Website",
    description:
      "You’re currently on this website! Throughout the course of this project, I learned how to apply Gatsby and Strapi as a headless CMS. My favorite part about the building process was using Framer Motion and custom React Hooks to handle all the animations on this page.",
    stack: ["Gatsby", "React", "GraphQL", "Strapi", "Framer Motion"],
    repo: "https://github.com/Jasspie/Jason_Li",
    link: "https://lijason.me/",
    image: Project4,
  },
  {
    title: "CaseMap",
    description:
      "In the midst of the COVID-19 pandemic, I was inspired to spend my free time learning as many new things as I could. Shortly afterwards, my very first React application, CaseMap, was born! It's an interactive map which presents the current and historical COVID-19 data through an interactive map and charts. Feel free to play around with it!",
    stack: ["React", "Chart.js", "Leaflet"],
    repo: "https://github.com/Jasspie/CaseMap",
    link: "https://jasspie.github.io/CaseMap/",
    image: Project5,
  },
]
