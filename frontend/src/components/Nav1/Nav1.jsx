import "./style.scss";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useState } from "react";

export default function Nav1() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className="navFirstExample">
      <a
        href="#top"
        onClick={() => setActiveNav("#top")}
        className={activeNav === "#top" ? "active" : ""}
      >
        <AiOutlineHome className="navIcon" />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser className="navIcon" />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook className="navIcon" />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine className="navIcon" />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail className="navIcon" />
      </a>
    </nav>
  );
}
