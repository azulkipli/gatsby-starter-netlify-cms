import React from "react";
import Link from "gatsby-link";

import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";
import twitter from "../img/twitter.svg";
import linkedin from "../img/linkedin.svg";

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item logo">
          Codesaga
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>

        <Link className="navbar-item" to="/portfolio">
          Portfolio
        </Link>
      </div>
      <div className="navbar-end">
        <a className="navbar-item" href="https://linkedin.com/in/azulkipli" target="_blank" rel="noopener noreferrer">
          <span className="icon">
            <img src={linkedin} alt="LinkedIn" />
          </span>
        </a>
        <a className="navbar-item" href="https://twitter.com/azulkipli" target="_blank" rel="noopener noreferrer">
          <span className="icon">
            <img src={twitter} alt="Twitter" />
          </span>
        </a>
        <a className="navbar-item" href="https://github.com/azulkipli" target="_blank" rel="noopener noreferrer">
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
