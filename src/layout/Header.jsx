import { React, useState } from "react";
import { Link } from "react-router-dom";
import Img from "../components/Img";
import Button from "../components/Button";
import { headerLinks, authLinks } from "../utils";
import Icon from "../components/Icon";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [headerMenu, setHeaderMenu] = useState(headerLinks);
  const [authMenu, setAuthMenu] = useState(authLinks);

  const navigate = useNavigate();

  const userName = localStorage.getItem("userName");

  const handleClick = () => {
    localStorage.clear();
    if (userName === null) {
      navigate("/login");
    }
  };

  return (
    <header className="header-area header-default header-transparent header-style sticky-header">
      <div className="container">
        <div className="row row-gutter-0 align-items-center">
          <div className="col-4 col-xs-3 col-sm-3 col-md-3 col-xl-3">
            <div className="header-logo-area">
              <Link to="/">
                <Img
                  className="logo-main"
                  src="assets/img/golds-gym-logo.png"
                  alt="Logo"
                />
                <Img
                  className="logo-light"
                  src="assets/img/golds-gym-logo.png"
                  alt="Logo"
                />
              </Link>
            </div>
          </div>
          <div className="col-8 col-sm-9 col-xl-9">
            <div className="header-align">
              <div className="header-navigation-area d-none d-xl-block">
                <ul className="main-menu nav position-relative">
                  {headerMenu.map((headerMenu) => {
                    const { id, url, name } = headerMenu;
                    return (
                      <li key={id}>
                        <Link to={url}>{name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="header-action-area">
                <div className="header-action-cart d-none d-xl-block">
                  <ul className="nav position-relative">
                    <li className="has-submenu">
                      <span className="btn-cart cart-icon">
                        <Icon className="pe-7s-users" />
                      </span>
                      <ul className="submenu-nav">
                        {userName !== null ? (
                          <li>
                            <Link onClick={handleClick}>Logout</Link>
                          </li>
                        ) : (
                          authMenu.map((authMenu) => {
                            const { id, url, name } = authMenu;
                            return (
                              <li key={id}>
                                <Link to={url}>{name}</Link>
                              </li>
                            );
                          })
                        )}
                      </ul>
                    </li>
                  </ul>
                </div>
                <Button className="btn-menu d-xl-none">
                  <Icon className="fa fa-bars" />
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
