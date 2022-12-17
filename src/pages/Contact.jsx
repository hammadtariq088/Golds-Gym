import React from "react";
import Img from "../components/Img";
import Hero from "../components/Hero";
import GetInTouch from "../components/contact/GetInTouch";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ContactMap from "../components/contact/ContactMap";

const Contact = () => {
  return (
    <main className="main-content">
      <Hero
        heading="CONTACT US"
        text=" We have very professional and exprt Instructor and they can very important to maintain our health luptas sit fugit, sed quia cuuntur magni dolores some products"
      />
      <section className="contact-area position-relative">
        <div className="contact-page-wrap">
          <div className="container">
            <div className="row">
              <div className="row">
                <div className="col-lg-12">
                  <GetInTouch />
                </div>
              </div>
              <div className="col-lg-12">
                <ContactInfo />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ContactForm />
              </div>
              <div className="col-lg-6">
                <ContactMap />
              </div>
            </div>
          </div>
          <div className="shape-group">
            <div className="shape-img5">
              <Img src="assets/img/photos/shape1.png" alt="Image" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
