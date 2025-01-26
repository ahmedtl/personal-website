import React, { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { experiences } from "@/assets/assets";
import Image from "next/image";

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["start end", "center center"],
  });
  return (
    <figure className="absolute left-0 stroke-black dark:stroke-white">
      <svg width="75" height="75" viewBox="0 0 100 100" className="-rotate-90">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[#fe388b] stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-white dark:fill-black"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-[#fe388b]"
        />
      </svg>
    </figure>
  );
};

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
  tools,
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            className="capitalize text-[#fe388b]"
            target="_blank"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-gray-700 font-Ovo dark:text-white/80">
          {time} | {address}
        </span>
        <p className="font-medium w-full font-Ovo">{work}</p>
        <div className="flex flex-wrap items-center mt-2">
          <p className="font-medium text-gray-700 font-Ovo dark:text-white/80 mr-2">
            Technologies used:
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-0">
            {tools &&
              tools.map((tool, index) => (
                <Image
                  key={index}
                  src={tool}
                  alt=""
                  className="w-6 h-6 object-contain"
                />
              ))}
          </div>
        </div>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div id="experience" className="w-full py-10 scroll-mt-20">
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        My Journey
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Experience
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        Take a look at my professional journey and the experiences that have
        shaped me along the way.
      </motion.p>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-8 w-[4px] h-full bg-black origin-top dark:bg-white"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {experiences.map((experience, index) => (
            <Details
              key={index}
              position={experience.position}
              company={experience.company}
              time={experience.time}
              address={experience.address}
              work={experience.work}
              companyLink={experience.companyLink}
              tools={experience.tools}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
