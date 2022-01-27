import React from "react";
import "./index.scss";


import { Link } from "react-router-dom";

export default function Header(props) {

  return (
    <div className="header ">
    <nav class="navbar navbar-expand-lg navbar-dark bg-black  ">
  <div class="container-fluid ">
  <Link to="/my-portfolio" className="brand ">Portfolio</Link>
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item ">
        <Link to="/experience">Experience</Link>
        </li>
        <li class="nav-item ">
        <Link to="/skills">Skills</Link>
        </li>
        <li class="nav-item ">
        <Link to="/projects">Projects</Link>
        </li>
        <li class="nav-item ">
        <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
}















