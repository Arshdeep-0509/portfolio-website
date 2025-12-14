
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,

} from '../assets'



import handyspot from "../assets/handyspot.webp";
import blacklightstudios from "../assets/blacklightstudios.webp"
import velvo from "../assets/velvo.webp";
import cryptify from "../assets/cryptify.webp";
import redmail from "../assets/redmail.webp";
import realo from "../assets/realo.webp";


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";
import nniit from "../assets/company/nniit.png";
import se from "../assets/company/se.svg";
import zillit from "../assets/company/zillit.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "NNIIT",
    icon: nniit,
    iconBg: "#383E56",
    date: "July 2025 - present",
    points: [
      "Built a unified Next.js + Node.js platform with role-based access for students, tutors, teachers, and admins.",
      "Automating onboarding workflows (document upload, profile setup, status tracking) reducing manual effort by 70%.",
      "Developed student portal with classes, assignments, analytics, fee management, and doubt resolution (99.9% uptime, WCAG compliant).",
      "Designed teacher/tutor dashboards for scheduling, performance analytics, and communication, improving outcomes by 25%",
      "Engineered modular admin panel for user, content, finance, and security management with real-time analytics.",
      "Implemented WebSocket-powered chat (1:1, groups, role-based) and attendance/engagement analytics scalable to 1M+ users.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Sustainability Economics",
    icon: se,
    iconBg: "#383E56",
    date: "June  2024 - July 2025",
    points: [
      "Increased user engagement by 30% through engineered responsive front-end architectures using ReactJS, TypeScript, and Redux.",
      "Optimized internal finance control for 50 projects aligned with sustainability goals while developing a user-friendly Sustainability Economics News to Next.js, achieving 95+ Lighthouse scores via SSR/ISR and SEO metadata. Integrated Google Analytics (100%) and Microsoft Clarity for heatmaps and session recordings.",
      "Collaborated with UX/UI teams using Figma and Adobe XD to translate designs into 50+ responsive pages, reducing UI delivery time by 50% and ensuring cross-browser/device compatibility.",
      "Integrated secure OAuth2 authentication with NextAuth.js (Google, LinkedIn), supporting 10K+ users with server-side session management for scalable access control.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Zillit",
    icon: zillit,
    iconBg: "#383E56",
    date: "July 2023 - June 2024",
    points: [
      "Designed and developed a comprehensive film management platform, integrating custom image/video editors, secure AWS S3 uploads, RSA encryption, and dynamic localization in 22+ languages, resulting in a 40% increase in platform adoption across global teams",
      "Streamlined cross-functional collaboration by implementing a dynamic weekly calendar, badge-based task tracking, and Role-based access control (RBAC) through admin/profile modules, reducing pre-production overhead by 35% and boosting task clarity among teams.",
      "Built a smart catering module with real-time chat support, enabling seamless coordination between production depart- ments and reducing meal-related delays by 50%, significantly improving on-set operational efficiency.",
      "Constructed a scalable event management system with full CRUD functionality (Create, Read, Update, Delete) and invitation workflows, increasing team event coordination efficiency by 45% across all production stages",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Handy Spot",
    description:
      "Led end-to-end development of “Handy Spot” using MERN stack, focusing on scalability and performance. Built a localized service platform with registration, profile showcasing, GPS based tracking, real-time provider discovery, dynamic dashboards, and in-app communication",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
 
    ],
    image: handyspot,
    source_code_link: "",
    live_link: "https://handyspot.in/",
  },
  {
    name: "Blacklight Studios",
    description:
      "Blacklight Studios crafts high-performance digital solutions including web & mobile development, creative design, e-commerce, SEO, and maintenance, focusing on impactful, scalable websites for startups and enterprises with showcased portfolio work and client testimonials.",
    tags: [
      {
        name: "Next Js",
        color: "blue-text-gradient",
      },
      {
        name: "emailJs",
        color: "green-text-gradient",
      },
      {
        name: "Three Js",
        color: "pink-text-gradient",
      },
    ],
    image: blacklightstudios,
    source_code_link: "",
    live_link: "https://www.blacklightstudios.io/",
  },
  {
    name: "Velvo",
    description:
      " Built a complete e-commerce platform with responsive UI, dynamic product listings, and efficient state management",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: velvo,
    source_code_link: "",
    live_link: "https://e-commerce-789.netlify.app/",
  },
  {
    name: "Cryptify",
    description:
      " Developed a real-time cryptocurrency tracker with interactive charts using React Chart.js 2, delivering seamless UX and performance ",
    tags: [
      {
        name: "Next Js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "GSAP",
        color: "pink-text-gradient",
      },

 
    ],
    image: cryptify,
    source_code_link: "",
    live_link: "https://crypto-website-weld.vercel.app/",
  },
  {
    name: "Redmail",
    description:
      " Created a modern, SEO-optimized marketing website with responsive design and performance enhancements",
    tags: [
      {
        name: "Next Js",
        color: "blue-text-gradient",
      },
      {
        name: "emailJs",
        color: "green-text-gradient",
      },
      {
        name: "Gsap",
        color: "pink-text-gradient",
      },
    ],
    image: redmail,
    source_code_link: "",
    live_link: "https://marketting-website-ten.vercel.app/",
  },
  {
    name: "Realo",
    description:
      "Realo appears to be a real estate platform showcasing property listings for buying, renting, and selling homes, highlighting features, neighborhood info, search options, client testimonials, and company details to help users find properties",
    tags: [
      {
        name: "Next Js",
        color: "blue-text-gradient",
      },
      {
        name: "emailJs",
        color: "green-text-gradient",
      },
      {
        name: "Gsap",
        color: "pink-text-gradient",
      },
    ],
    image: realo,
    source_code_link: "",
    live_link: "https://real-estate-website-eight-alpha.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
