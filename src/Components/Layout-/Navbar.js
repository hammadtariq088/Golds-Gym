import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header-area header-default header-transparent header-style sticky-header">
      <div className="container">
        <div className="row row-gutter-0 align-items-center">
          <div className="col-4 col-xs-3 col-sm-3 col-md-3 col-xl-3">
            <div className="header-logo-area">
              <a href="index.html">
                <img
                  className="logo-main"
                  src="assets/img/logo-light.png"
                  alt="Logo"
                />
                <img
                  className="logo-light"
                  src="assets/img/logo-light.png"
                  alt="Logo"
                />
              </a>
            </div>
          </div>
          <div className="col-8 col-sm-9 col-xl-9">
            <div className="header-align">
              <div className="header-navigation-area d-none d-xl-block">
                <ul className="main-menu nav position-relative">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <NavLink to='/aboutus'>About</NavLink>
                  </li>
                  <li className="has-submenu">
                    <a href="blog.html">Pages</a>
                    <ul className="submenu-nav">
                      <li>
                        <a href="login-register.html">Login/Register</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <a href="classes.html">Classes</a>
                    <ul className="submenu-nav">
                      <li>
                        <a href="classes.html">Classes</a>
                      </li>
                      <li>
                        <a href="class-details.html">Class Details</a>
                      </li>
                    </ul>
                  </li>
                  
                    
                  <li className="has-submenu">
                    <a href="team.html">Trainers</a>
                    <ul className="submenu-nav">
                      <li>
                        <a href="team.html">Trainers</a>
                      </li>
                      <li>
                        <a href="team-details.html">Trainer Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <a href="blog.html">Pricing Plans</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
