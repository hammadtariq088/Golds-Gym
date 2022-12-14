import React from "react";
import { Link } from "react-router-dom";
import Img from "../components/Img";
import Button from "../components/Button";

const Header = () => {
  return (
    <header className="header-area header-default header-transparent header-style sticky-header">
      <div className="container">
        <div className="row row-gutter-0 align-items-center">
          <div className="col-4 col-xs-3 col-sm-3 col-md-3 col-xl-3">
            <div className="header-logo-area">
              <Link to="/">
                <Img
                  className="logo-main"
                  src="assets/img/logo-light.png"
                  alt="Logo"
                />
                <Img
                  className="logo-light"
                  src="assets/img/logo-light.png"
                  alt="Logo"
                />
              </Link>
            </div>
          </div>
          <div className="col-8 col-sm-9 col-xl-9">
            <div className="header-align">
              <div className="header-navigation-area d-none d-xl-block">
                <ul className="main-menu nav position-relative">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/exercises">Exercises</Link>
                  </li>
                  <li>
                    <Link to="/plans">Gym Plans</Link>
                  </li>
                  <li className="has-submenu">
                    <Link to="/trainers">Trainers</Link>
                    <ul className="submenu-nav">
                      <li>
                        <Link to="/trainerdetails">Trainer Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="header-action-area">
                <div className="header-action-cart d-none d-xl-block">
                  <ul className="nav position-relative">
                    <li className="has-submenu">
                      <span className="btn-cart cart-icon">
                        <i className="pe-7s-users"></i>
                      </span>
                      <ul className="submenu-nav">
                        <li>
                          <Link to="/login">Login</Link>
                        </li>
                        <li>
                          <Link to="/register">Register</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <Button className="btn-menu d-xl-none">
                  <i className="fa fa-bars"></i>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
