import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
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
        <a href="https://instagram.com">
          <FaInstagram />
        </a>
        <a href="https://Twitter.com">
          <IoLogoTwitter />
        </a>
        <a href="https://LinkedIn.com">
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
