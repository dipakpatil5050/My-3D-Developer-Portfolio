import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ERP,
  Deepdocs
} from "../assets";

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
    title: "Java Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Mobile App Developer (IOS + Android)",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Galaxy Infotech",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2023 - Nov 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Galaxy Infotech",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Feb 2025",
    points: [
      "Developed and maintained a cross-platform ERP mobile application using React Native, improving accessibility and operational efficiency for end-users.",
      "Integrated complex business logic and RESTful APIs to manage modules such as inventory, HR, finance, and sales within the mobile app.",
      "Collaborated with UI/UX designers and backend developers to ensure seamless user experience and robust data handling.",
      "Implemented mobile-specific optimizations including offline support, local storage, and push notifications.",
      "Conducted testing and debugging on both iOS and Android platforms to ensure smooth performance and usability.",
      "Participated in Agile development cycles, sprint planning, and code reviews to maintain high code quality and timely delivery.",
    ],
  },
  {
     title: "Full Stack Developer",
    company_name: "Velox Automation Pvt Ltd",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Feb 2025 - Present",
    points: [
      "Designed and developed a fully customizable IoT dashboard product using Java (Spring Boot) for backend APIs and React.js with Redux Toolkit and TanStack Query on the frontend.",
      "Built scalable and secure RESTful services with PostgreSQL as the database layer and deployed the application on AWS infrastructure.",
      "Integrated real-time data visualization modules to display telemetry and analytics from various IoT devices, tailored to client-specific configurations.",
      "Collaborated with cross-functional teams including product managers, UI/UX designers, and QA engineers to deliver client-ready features efficiently.",
      "Implemented dynamic component rendering and dashboard widgets that adapt based on device types, user roles, and client requirements.",
      "Ensured responsive design, performance optimization, and cross-browser compatibility across web platforms.",
      "Participated in regular code reviews, CI/CD pipelines, and Agile development practices to maintain high code quality and delivery standards.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but dipak proved me wrong.",
    name: "Pratik Yeole",
    designation: "MD",
    company: "Sulai Electrical's",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their client's success like dipak does.",
    name: "Pankaj Jangid",
    designation: "CEO",
    company: "VK Automotive",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    testimonial:
      "After dipak optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Pranav Patil",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Ebuy - Shopping App",
    link: "https://ebuy-shopping.vercel.app/",
    description:
      "Developed a full-stack e-commerce app, ebuy using JavaScript, React.js, Firebase, and Redux with Responsive Design. Implemented user authentication using Firebase, a responsive product catalog with search options, and secure payments through Razorpay API. Integrated Admin Panel for efficient management of products, orders, and user accounts. Achieved real-time order status updates, enhancing the overall shopping experience for users ",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/diapkpatil5050",
  },
  {
    name: "CyberSpy",
    link: "https://cyberspy.vercel.app/",
    description:
      "Created Cyberspy a full-stack Cyber Security Blogsite, utilizing Javascript with React.js. Designed and developed a fully responsive blogging platform to ensure an optimal viewing experience on all Screen devices, view estimated salary ranges for positions, and locate available jobs based on their current location. Incorporated a user-friendly admin panel for efficient content management and ensured scalability for future growth",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "3D Portfolio Website",
    link: "https://ebuy-shopping.vercel.app/",
    description:
      "Developed a cutting-edge responsive 3D Portfolio using React.js and Three.js, showcasing a modern and innovative developer portfolio with Some industry practices like Higher order components in React.Integrated Email.js for seamless communication and utilized Framer Motion for smooth animations, enhancing the overall user experience. The website is designed to highlight skills, projects, and achievements in a visually compelling manner.",
    tags: [
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "SYSPRO ERP Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.sysproerp.sysproapp",
    description:
      "A full-featured, scalable ERP mobile application designed for both Android and iOS platforms. This project streamlines enterprise resource planning by integrating core business functions like inventory management, sales tracking, and reporting into a unified mobile experience.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ERP,
    source_code_link: "https://github.com/dipakpatil5050",
  },
  {
    name: "Task Management App",
    link: "https://deepdocs.vercel.app/",
    description:
      "Developed a robust, scalable AI-driven task management application that automates task planning and enhances productivity through intelligent features such as smart categorization, adaptive reminders, and performance insights.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "JWT",
        color: "green-text-gradient",
      },
      {
        name: "OAuth2",
        color: "blue-text-gradient",
      },
    ],
    image: Deepdocs,
    source_code_link: "https://github.com/dipakpatil5050/deepdocs"
  }
];

export { services, technologies, experiences, testimonials, projects };
