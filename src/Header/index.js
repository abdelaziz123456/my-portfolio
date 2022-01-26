import React from "react";
import "./index.scss";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";
import { useState } from "react";
export default function Header(props) {
  
  const navbarToggle = () => setIsOpen(!isOpen);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header ">
      <Navbar color="white" dark expand="md">
        <NavbarBrand className="nav-icon">
            <button className="btn  m-0 p-0" onClick={()=>{props.setMode(!props.mode)}}>
            <i className={`fa  mx-1 fa-2x ${props.icon1} `} 
            aria-hidden="true"></i>
            <i className={`fa mx-1  fa-2x ${props.icon2} `} 
            aria-hidden="true"></i>
            </button>
        
        </NavbarBrand>
        <NavbarToggler onClick={navbarToggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="d-flex justify-content-between w-100" navbar>
            <div className="d-flex empty"></div>
            <div className="d-flex ">
              <div className="nav-item">
                <a to="/sell" className="nav-link">
                  Sell
                </a>
              </div>
              <div className="nav-item">
                <a to="/buy" className="nav-link">
                  Buy
                </a>
              </div>
              <div className="nav-item">
                <a to="/rent" className="nav-link">
                  Rent
                </a>
              </div>
              <div className="nav-item"></div>
            </div>
            <div>
              <div className="nav-item">
                <a to="/sign-in" className="nav-link btn  ">
                  Sign Up / In
                </a>
                :
              </div>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
