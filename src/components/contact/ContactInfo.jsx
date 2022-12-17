import React from "react";
import { Link } from "react-router-dom";
import Img from "../Img";

const ContactInfo = () => {
  return (
    <div className="contact-info-content">
      <div className="contact-info-item">
        <div className="icon">
          <Img className="icon-img" src="assets/img/icons/c1.png" alt="Icon" />
        </div>
        <div className="content">
          <p>
            252B, Central Street Main road
            <br />
            Belix Tower, New York, USA
          </p>
        </div>
      </div>
      <div className="contact-info-item">
        <div className="icon">
          <Img className="icon-img" src="assets/img/icons/c2.png" alt="Icon" />
        </div>
        <div className="content">
          <Link to="#">09 (123) 456 789</Link>
          <Link to="#">09 (987) 654 321</Link>
        </div>
      </div>
      <div className="contact-info-item">
        <div className="icon">
          <Img className="icon-img" src="assets/img/icons/c3.png" alt="Icon" />
        </div>
        <div className="content">
          <Link to="#">www.goldsgym.com</Link>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
