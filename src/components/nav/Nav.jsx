import React from "react";
import "./nav.css";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

export const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => {
          setActiveNav("#");
        }}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => {
          setActiveNav("#about");
        }}
        className={activeNav === "#about" ? "active" : ""}
      > 
        <AiOutlineUser />
      </a>
      <a
        href="#project"
        onClick={() => {
          setActiveNav("#project");
        }}
        className={activeNav === "#project" ? "active" : ""}
      > 
        <BiBook />
      </a>
      <a
        href="#contact"
        onClick={() => {
          setActiveNav("#contact");
        }}
        className={activeNav === "#contact" ? "active" : ""}
      > 
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};
