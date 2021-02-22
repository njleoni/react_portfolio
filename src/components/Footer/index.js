import React from "react";
import "./style.css";
import link from "../../images/linkedin.png";
import git from "../../images/github.png";

function Footer() {
  return (
    <footer class="fixed-bottom py-4 bg-dark text-white-50">
      <a href="http://www.linkedin.com/in/nick-leoni-08b3739b" target="_blank">
        <img src={link} class="img-fluid" alt="Linkedin" />
      </a>
      <a href="https://github.com/njleoni" target="_blank">
        <img src={git} class="img-fluid" alt="GitHub" />
      </a>
    </footer>
  );
}

export default Footer;
