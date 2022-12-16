import { React, useState } from "react";
import { Link } from "react-router-dom";
import Img from "../components/Img";
import Input from "../components/Input";
import Icon from "../components/Icon";
import Button from "../components/Button";
import { footerLinks, socialLinks } from "../utils";

const Footer = () => {
  const [footerMenu, setFooterMenu] = useState(footerLinks);
  const [footerSocials, setFooterSocials] = useState(socialLinks);
  return (
    <footer
      className="footer-area default-style footer-bg"
      data-bg-img="assets/img/photos/footer-bg.png"
    >
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="widget-item mb-sm-30">
                <div className="about-widget">
                  <Link className="footer-logo" to="/">
                    <Img src="assets/img/golds-gym-logo.png" alt="Logo" />
                  </Link>
                  <p>
                    Golds Gym winner dolor sit consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </p>
                  <div className="opening-time">
                    <h4 className="title">Opening time</h4>
                    <ul>
                      <li>Monday - Friday: 7 am to 10 pm</li>
                      <li>Saturday - Sunday: 9 am to 10 pm</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="widget-item pl-20 pl-sm-0 mb-sm-30 mb-xs-40">
                <h4>USEFULL LINK</h4>
                <nav className="widget-menu-wrap">
                  {footerMenu.map((footerMenu) => {
                    const { id, className, links } = footerMenu;
                    return (
                      <ul className={className} key={id}>
                        {links.map((links) => {
                          const { id, url, name } = links;
                          return (
                            <li key={id}>
                              <Link to={url}>{name}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    );
                  })}
                </nav>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="widget-item mb-xs-50">
                <h4>CONTACT INFO</h4>
                <div className="widget-contact-info">
                  <div className="contact-info-item">
                    <div className="icon-box">
                      <Img src="assets/img/icons/1.png" alt="Logo" />
                    </div>
                    <div className="content">
                      <h4 className="title">Address</h4>
                      <p>
                        252B, Central Street Main road Belix Tower, New York,
                        USA
                      </p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon-box">
                      <img src="assets/img/icons/2.png" alt="Logo" />
                    </div>
                    <div className="content">
                      <h4 className="title">Phone</h4>
                      <ul>
                        <li>
                          <Link to="#">09 (123) 456 789</Link>
                        </li>
                        <li>
                          <Link to="#">09 (987) 654 321</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon-box">
                      <Img src="assets/img/icons/3.png" alt="Logo" />
                    </div>
                    <div className="content">
                      <h4 className="title">Website</h4>
                      <ul>
                        <li>
                          <Link to="#">www.goldsgym.com</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="widget-item">
                <h4>NEWSLETTER</h4>
                <div className="widget-newsletter">
                  <p>
                    Subscribe our Newsletter and gates latest updates of offers,
                    productsa and promotions from every week we provide
                  </p>
                  <form className="newsletter-form input-btn-group">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Email here"
                    />
                    <Button className="btn btn-theme">
                      <Icon className="fa fa-paper-plane-o" />
                    </Button>
                  </form>
                </div>
                <div className="widget-social-icons">
                  {footerSocials.map((socialLinks) => {
                    const { id, className, url } = socialLinks;
                    return (
                      <Link to={url} key={id}>
                        <Icon className={className} />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="widget-copyright text-center">
                  <p>
                    <Icon className="fa fa-copyright" /> 2022-2023&nbsp;
                    <Link to="/">Golds Gym</Link>- All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
