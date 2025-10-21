import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import my_image from "./ahmed_tlili.jpg";
import ahmed_logo from "./Ahmed_Logo.png";
import ahmed_logo_dark from "./Ahmed_Logo_Dark.png";
import jenkins_logo from "./Jenkins_logo.png";
import react_logo from "./react.png";
import dotnet_logo from "./dotnet_logo.png";
import springboot from "./springboot.png";
import sql from "./sql.png";
import angular from "./angular.png";
import elastic from "./elastic-elasticsearch-logo.png";
import logstash from "./logstash.png";
import kibana from "./kibana.png";
import sqlserver from "./sqlserver.png";
import docker from "./docker.png";
import rabbitmq from "./rabbitmq.png";
import gitlab from "./gitlab.png";
import Tailwind_CSS_Logo from "./Tailwind_CSS_Logo.png";
import nextjs from "./nextjs.png";

export const assets = {
  nextjs,
  elastic,
  sql,
  springboot,
  angular,
  jenkins_logo,
  ahmed_logo_dark,
  my_image,
  ahmed_logo,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  git,
  mongodb,
  right_arrow_white,
  mail_icon,
  mail_icon_dark,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  react_logo,
  dotnet_logo,
  logstash,
  kibana,
  sqlserver,
  docker,
  rabbitmq,
  gitlab,
  Tailwind_CSS_Logo,
};

export const workData = [
  {
    title: "Jenkins Pipeline",
    description:
      "Establishment of Jenkins pipeline for test automation and continuous integration for an established Spring Boot and Angular application.",
    bgImage: "/Devops.png",
    href: "https://github.com/InesMsallem/DevopsProject/tree/ahmedtl",
    tags: [
      "Jenkins",
      "Linux",
      "Docker",
      "Nexus",
      "Git",
      "SonarQube",
      "JUnit",
      "Grafana",
      "Prometheus",
    ],
  },
  {
    title: "Expertise Shaper",
    description:
      "An e-learning and job hiring web application from scratch using the MERN stack, integrating education and employment opportunities.",
    bgImage: "/Expertise-shaper.png",
    href: "https://github.com/InesMsallem/ExpertiseShaper/tree/Tlili",
    tags: [
      "React",
      "Node",
      "TailwindCSS",
      "Zustand",
      "Stripe",
      "Git",
      "MongoDB",
    ],
  },
  {
    title: "Car Rental App",
    description:
      "Collaborated within a team to develop a car rental application using a microservices-based architecture, ensuring robust security by integrating Keycloak.",
    bgImage: "/work-2.png",
    href: "https://github.com/y-essine/web-dist/tree/main",
    tags: ["Spring Boot", "React", "Docker", "PostgreSQL", "Keycloak", "Git"],
  },
];

export const infoList = [
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Master's in Computer Science",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const experiences = [
  {
    position: "Software Engineer",
    company: "WinSoft Informatique",
    time: "03/2025 - 09/2025",
    address: "Ariana, Tunisia",
    work: "Worked on developing key modules for WinSoft Garage Plus, including a tablet-based repair management system and a production tracking module that improved workshop efficiency and transparency. Also designed and launched the company’s website, enhancing its online presence.",
    companyLink: "https://www.winsoftinformatique.tn/",
    tools: [
      assets.dotnet_logo,
      assets.sqlserver,
      assets.git,
      assets.nextjs,
      assets.Tailwind_CSS_Logo,
    ],
  },
  {
    position: "Software Engineer Intern",
    company: "Sibtel",
    time: "02/2024 - 09/2024",
    address: "Tunis, Tunisia",
    work: "Worked within a Scrum team to develop an archive consultation application for compensation processes, aimed at Tunisian banks, including management and billing for check image consultations. The application is based on a secure and scalable microservices architecture.",
    companyLink: "https://www.sibtel.com.tn/",
    tools: [
      assets.dotnet_logo,
      assets.sqlserver,
      assets.docker,
      assets.rabbitmq,
      assets.gitlab,
      assets.git,
      assets.elastic,
      assets.logstash,
      assets.kibana,
    ],
  },
  {
    position: "Software Engineer Intern",
    company: "Peak source technology",
    time: "06/2023 - 08/2023",
    address: "Tunis, Tunisia",
    work: "Development of a web application for employee and human resources management, enabling optimized resource management and more efficient employee tracking.",
    companyLink: "https://peaksource.group/",
    tools: [
      assets.nextjs,
      assets.Tailwind_CSS_Logo,
      assets.mongodb,
      assets.git,
    ],
  },
  {
    position: "Software Engineer Intern",
    company: "Bee coders",
    time: "06/2022 - 08/2022",
    address: "Ariana, Tunisia",
    work: "Development of a web application for restaurant management, enhancing order processing, stock management, and reservation handling.",
    companyLink: "https://www.beecoders.tn/",
    tools: [assets.springboot, assets.angular, assets.sql, assets.git],
  },
];

export const toolsData = [
  assets.react_logo,
  assets.dotnet_logo,
  assets.springboot,
  assets.angular,
  assets.git,
  assets.jenkins_logo,
];
