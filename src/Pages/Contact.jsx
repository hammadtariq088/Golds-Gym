import React from "react";
import Img from "../components/Img";
import Button from "../components/Button";
import TextArea from "../components/TextArea";
import Input from "../components/Input";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <main className="main-content">
      {/* <!--== Start Page Title Area ==--> */}
      <section className="page-title-area bg-img contact-banner-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-title-content content-style2">
                <h2 className="title">
                  <span>CONTACT </span>US
                </h2>
                <div className="desc">
                  <p>
                    We have very professional and exprt Instructor and they can
                    very important to maintain
                    <br />
                    our health luptas sit fugit, sed quia cuuntur magni dolores
                    some products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--== End Page Title Area ==--> */}

      {/* <!--== Start Contact Area ==--> */}
      <section className="contact-area position-relative">
        <div className="contact-page-wrap">
          <div className="container">
            <div className="row">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center">
                    <h2 className="title">
                      GET IN <span>TOUCH</span>
                    </h2>
                    <div className="desc">
                      <p>Contact us if you neeed information</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="contact-info-content">
                  <div className="contact-info-item">
                    <div className="icon">
                      <Img
                        className="icon-img"
                        src="assets/img/icons/c1.png"
                        alt="Icon"
                      />
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
                      <Img
                        className="icon-img"
                        src="assets/img/icons/c2.png"
                        alt="Icon"
                      />
                    </div>
                    <div className="content">
                      <Link to="#">09 (123) 456 789</Link>
                      <Link to="#">09 (987) 654 321</Link>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <Img
                        className="icon-img"
                        src="assets/img/icons/c3.png"
                        alt="Icon"
                      />
                    </div>
                    <div className="content">
                      <Link to="#">www.goldsgym.com</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-form mb-md-90">
                  <form
                    className="contact-form-wrapper"
                    id="contact-form"
                    action="http://whizthemes.com/mail-php/raju/arden/mail.php"
                    method="post"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="section-title">
                          <h2 className="title">Send Message</h2>
                          <div className="desc">
                            <p>
                              If you need any information, feel free to send me
                              message I will try to answer your and give you
                              proper tips about your message
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="row row-gutter-12">
                          <div className="col-md-6">
                            <div className="form-group">
                              <Input
                                className="form-control"
                                type="text"
                                name="con_name"
                                placeholder="Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <Input
                                className="form-control"
                                type="email"
                                name="con_email"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group mb-0">
                              <TextArea
                                name="con_message"
                                placeholder="Write message here"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group mb-0">
                              <Button className="btn btn-theme" type="submit">
                                SEND MESSAGE
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                {/* <!-- Message Notification --> */}
                <div className="form-message"></div>
              </div>
              <div className="col-lg-6">
                <div className="contact-map-area">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8402891185374!2d144.95373631590425!3d-37.81720974201477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2ssg!4v1607294780661!5m2!1sen!2ssg"></iframe>
                </div>
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
      {/* <!--== End Contact Area ==--> */}
    </main>
  );
};

export default Contact;
