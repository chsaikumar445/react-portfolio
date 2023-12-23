import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/sai-kumar-ch/" target="__balnk">
        <BsLinkedin />
      </a>
      <a href="https://github.com/chsaikumar445" target="__balnk">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/ch.saikumar_/" target="__balnk">
        <FiInstagram />
      </a>
    </div>
  );
};

export default HeaderSocial;
