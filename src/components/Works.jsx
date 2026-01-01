import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useState } from "react";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  link,
  backend,
}) => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[200px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center item-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-2/2 h-2/2 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        {backend && (
          <div className="flex gap-2 mt-4 border-b border-gray-700">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2 text-[12px] font-medium transition-colors ${
                activeTab === "overview"
                  ? "text-white border-b-2 border-[#915eff]"
                  : "text-secondary"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("backend")}
              className={`px-4 py-2 text-[12px] font-medium transition-colors ${
                activeTab === "backend"
                  ? "text-white border-b-2 border-[#915eff]"
                  : "text-secondary"
              }`}
            >
              Backend
            </button>
          </div>
        )}

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">
            <a href={link} target="__blank">
              {name}
            </a>
          </h3>

          {activeTab === "overview" ? (
            <>
              <p className="mt-2 text-secondary text-[14px]">{description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                    #{tag.name}
                  </p>
                ))}
              </div>
            </>
          ) : (
            backend && (
              <div className="mt-3">
                <div className="mb-3">
                  <p className="text-[#915eff] text-[12px] uppercase font-semibold mb-1">
                    Architecture
                  </p>
                  <p className="text-secondary text-[13px]">
                    {backend.architecture}
                  </p>
                </div>

                <div className="mb-3">
                  <p className="text-[#915eff] text-[12px] uppercase font-semibold mb-1">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {backend.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-black-200 text-secondary text-[11px] px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[#915eff] text-[12px] uppercase font-semibold mb-1">
                    Key Features
                  </p>
                  <ul className="text-secondary text-[12px] space-y-1">
                    {backend.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#915eff] mr-2">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className=" mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`projects-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
