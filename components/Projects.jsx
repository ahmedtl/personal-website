import { workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

const Projects = ({ isDarkMode }) => {
  return (
    <motion.div
      id="projects"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        My portfolio
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        My latest projects
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        Welcome to my portfolio! Explore a selection of projects that highlight
        my skills in front-end and back-end development.
      </motion.p>
      <motion.div
        className="grid grid-cols-auto  gap-5 dark:text-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        {workData.map((project, index) => (
          <Card key={index} className=" border-gray-400  dark:bg-darkTheme">
            <CardHeader>
              <Image
                alt="Image"
                className="cursor-pointer hover:scale-105 transition-transform duration-300 border border-gray-300 rounded-lg"
                width={1280}
                height={832}
                quality={100}
                src={project.bgImage}
              />
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 items-center">
                <h1 className="text-2xl font-bold">{project.title}</h1>
                <a
                  href={project.href}
                  target="_blank"
                  className="bg-muted-foreground/10 p-2 rounded-lg"
                >
                  <Github size={16} strokeWidth={3} />
                </a>
              </div>
              <p className=" text-gray-700 my-4 font-Ovo dark:text-white/80">
                {project.description}
              </p>
            </CardContent>
            <CardFooter className="*:mr-2 *:mb-2 flex flex-wrap">
              {project.tags.map((tag) => (
                <Badge variant="outline" key={tag}>
                  {tag}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
