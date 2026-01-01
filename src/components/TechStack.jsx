import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const TechStackCard = ({ title, techs, index, icon }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="bg-tertiary p-6 rounded-2xl w-full sm:w-[320px]"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-[#915eff] flex items-center justify-center text-2xl">
          {icon}
        </div>
        <h3 className="text-white font-bold text-[20px]">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2">
        {techs.map((tech, idx) => (
          <li
            key={idx}
            className="text-secondary text-[14px] pl-4 border-l-2 border-[#915eff] py-1"
          >
            {tech}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const TechStack = () => {
  const stacks = [
    {
      title: "Backend",
      icon: "⚙️",
      techs: [
        "Java (Spring Boot, Spring Security)",
        "Node.js (Express.js)",
        "RESTful API Design",
        "GraphQL",
        "Microservices Architecture",
        "JWT & OAuth2 Authentication",
      ],
    },
    {
      title: "Databases",
      icon: "🗄️",
      techs: [
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Redis (Caching)",
        "Database Design & Optimization",
        "Query Performance Tuning",
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: "☁️",
      techs: [
        "AWS (EC2, S3, RDS, Lambda)",
        "Docker & Containerization",
        "CI/CD Pipelines",
        "GitHub Actions",
        "Nginx & Load Balancing",
        "Linux Server Management",
      ],
    },
    {
      title: "Frontend",
      icon: "🎨",
      techs: [
        "React.js & React Native",
        "Redux Toolkit & TanStack Query",
        "TypeScript",
        "Tailwind CSS",
        "Three.js (3D Graphics)",
        "Responsive Design",
      ],
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Complete Technology Stack</p>
        <h2 className={styles.sectionHeadText}>Tech Expertise.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Full-stack expertise spanning backend architecture, database design,
        cloud infrastructure, and modern frontend development. Specialized in
        building scalable, secure, and high-performance applications.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {stacks.map((stack, index) => (
          <TechStackCard key={stack.title} index={index} {...stack} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(TechStack, "techstack");
