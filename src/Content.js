import heroBackground from "./assets/images/Hero/heroBackground.svg";
// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

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
      }

}