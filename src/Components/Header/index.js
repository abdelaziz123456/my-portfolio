import React from "react";
import "./index.scss";


import { Link } from "react-router-dom";

export default function Header(props) {

  return (
    <div className="header ">
    <nav className="navbar navbar-expand-md navbar-dark bg-black  ">
  <div className="container-fluid ">
  <Link to="/my-portfolio" className="brand ">Portfolio</Link>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
      <li className="nav-item ">
        <Link to="/learning">Learning</Link>
        </li>
        <li className="nav-item ">
        <Link to="/experience">Experience</Link>
        </li>
        <li className="nav-item ">
        <Link to="/skills">Skills</Link>
        </li>
        <li className="nav-item ">
        <Link to="/projects">Projects</Link>
        </li>
        <li className="nav-item ">
        <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
}















