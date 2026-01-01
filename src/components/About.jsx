import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px]
          py-5, px-5 min-h-[280px] flex justify-evenly items-center flex-col "
        >
          <img src={icon} alt="title" className="w-16 h-16 object-contain" />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      {/* photo adjustment */}
      <div className="flex flex-wrap ml-96 mb opacity-60 justify-end scale-x-50 scale-y-50 absolute">
        {/* <img src="src\assets\my.png" alt="my photo png" /> */}
        {/* src\assets\my.png : full photo link and another half photo link :  public\my.png*/}
      </div>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px]
        max-w-lg leading-[30px]"
      >
        I'm Dipak Patil, a Full-Stack Engineer based in Dhule, Maharashtra. I
        specialize in bridging the gap between high-performance backends and
        immersive frontends. With deep expertise in Java (Spring Boot) and
        JavaScript (React, React Native, Node.js), I move beyond simple coding
        to engineer scalable solutions. Whether it's designing Microservices
        architectures, implementing secure OAuth2 flows, or crafting interactive
        3D interfaces, I build production-ready digital products that are
        robust, secure, and intuitive. Let's turn your complex requirements into
        elegant, scalable software.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((services, index) => (
          <ServiceCard key={services.title} index={index} {...services} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
