import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#footer" className="footer__logo">
        SAI KUMAR
      </a>
      <ul className="permanent__links">
        <li>
          <a href="#footer">Home</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testmonials">Testmonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.instagram.com/ch.saikumar_/">
          <FaInstagram />
        </a>
        <a href="https://github.com/chsaikumar445">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/sai-kumar-ch/">
          <FaLinkedin />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy;SAI KUMAR. All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
