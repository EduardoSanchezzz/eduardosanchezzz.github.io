import heroBackground from "./assets/images/Hero/heroBackground.svg";
// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdCall } from "react-icons/md";
import { BsLinkedin, BsPlusCircleFill } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

import figma from "./assets/images/Skills/figma.png";
import js from "./assets/images/Skills/js.png";
import mysql from "./assets/images/Skills/mysql.png";
import reactjs from "./assets/images/Skills/react.png";
import cpp from "./assets/images/Skills/cpp.svg";
import python from "./assets/images/Skills/python.png";

export const content = {
    nav: [
        {
          link: "#home",
          icon: TbSmartHome,
        },
        {
          link: "#skills",
          icon: BiUser,
        },
        {
          link: "#services",
          icon: RiServiceLine,
        },
        {
          link: "#projects",
          icon: RiProjectorLine,
        },
        {
          link: "#contact",
          icon: MdOutlinePermContactCalendar,
        },
    ],
    hero: {
        title: "Web Developer",
        firstName: "Sanchez",
        LastName: "Eduardo",
        btnText: "Contact Me",
        image: heroBackground,
        hero_content: [
          {
            text: "I design products that impress, improve, are stylish, are responsive",
          },
        ],
    },
    skills: {
        title: "Skills",
        skills_content: [
          {
            name: "Javascript",
            para: "2+ years of experience",
            logo: js,
          },
          {
            name: "ReactJS",
            para: "2+ years of experience",
            logo: reactjs,
          },
          {
            name: "C++",
            para: "3+ years of experience",
            logo: cpp,
          },
          {
            name: "MySQL",
            para: "1+ year of experience",
            logo: mysql,
          },
          {
            name: "Python",
            para: "1+ year of experience",
            logo: python,
          },
          {
            name: "Figma",
            para: "1+ year of experience",
            logo: figma,
            
          },
        ],
        icon: BsPlusCircleFill,
      },
      Contact: {
        title: "Contact Me",
        social_media: [
          {
            text: "e5sanchez@uwaterloo.ca",
            icon: GrMail,
            link: "mailto:e5sanchez@uwaterloo.ca",
          },
          {
            text: "905-966-4113",
            icon: MdCall,
            link: "/",
          },
          {
            text: "Eduardo Sanchez",
            icon: BsLinkedin,
            link: "https://www.linkedin.com/sanchez-ed/",
          },
        ],
      },


}