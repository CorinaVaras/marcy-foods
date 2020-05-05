import React from "react";
import menu from "../assets/img/menuIcon.png";
import "../assets/css/Navbar.css";
import "../assets/css/hover-min.css";
import logo from "../assets/img/logo.png";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <>
      <label htmlFor="toggle">
        <img
          style={{ width: "40px", height: "40px", padding: "10px" }}
          alt="menuIcon"
          src={menu}
        />
      </label>
      <input type="checkbox" id="toggle" />

      <div className="container-nav">
        <div className="container-img">
          <img
            alt="marcyfood"
            src={logo}
            style={{ width: "85px", height: "50px" }}/>
        </div>
        <div className="container-items">
          <div className="item-nav ">
            <Link
              className="hvr-underline-from-center"
              activeClass="active"
              to="inicio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
            >
              Inicio
            </Link>
          </div>
          <div className="item-nav">
            <Link
              className="hvr-underline-from-center"
              activeClass="active"
              to="menu"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
            >
              Menú
            </Link>
          </div>
          <div className="item-nav">
            <Link
              className="hvr-underline-from-center"
              activeClass="active"
              to="delivery"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
            >
              Delivery
            </Link>
          </div>
          <div className="item-nav">
            <Link
              className="hvr-underline-from-center"
              activeClass="active"
              to="contacto"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
