import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { Gitlab, Github, Linkedin } from "lucide-react";
const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.ahmed_logo_dark : assets.ahmed_logo}
          alt=""
          className="w-36 mx-auto mb-2"
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          ahmed.tlili@esprit.tn
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>
          &copy; {currentYear} {` • `} Ahmed Tlili
        </p>
        <ul className="flex items-center gap-6 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/ahmedtl">
              <Github size={20} strokeWidth={3} />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://gitlab.com/ahmedtl">
              <Gitlab size={20} strokeWidth={3} />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/ahmed-tlili00">
              <Linkedin size={20} strokeWidth={3} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
