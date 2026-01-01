import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const StatCard = ({ number, label, suffix = "+", index }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = parseInt(number);
          const duration = 2000;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [number, hasAnimated]);

  return (
    <motion.div
      ref={cardRef}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="bg-tertiary p-8 rounded-2xl min-w-[200px] flex-1"
    >
      <div className="text-center">
        <h3 className="text-white font-black text-[40px] sm:text-[50px] lg:text-[60px]">
          {count}
          <span className="text-[#915eff]">{suffix}</span>
        </h3>
        <p className="text-secondary text-[14px] sm:text-[16px] uppercase tracking-wider mt-2">
          {label}
        </p>
      </div>
    </motion.div>
  );
};

const Stats = () => {
  const stats = [
    { number: "130", label: "APIs Built", suffix: "+" },
    { number: "15", label: "Microservices", suffix: "+" },
    { number: "3", label: "Years Experience", suffix: "" },
    { number: "99", label: "Uptime", suffix: "%" },
  ];

  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px] flex flex-col justify-center`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Achievements</p>
          <h2 className={styles.sectionHeadText}>By The Numbers.</h2>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-7 justify-center">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} index={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Stats, "stats");
