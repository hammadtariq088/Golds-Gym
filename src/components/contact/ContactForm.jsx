import React from "react";
import Button from "../Button";
import TextArea from "../TextArea";
import Input from "../Input";

const ContactForm = () => {
  return (
    <>
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
                    If you need any information, feel free to send me message I
                    will try to answer your and give you proper tips about your
                    message
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
      <div className="form-message"></div>
    </>
  );
};

export default ContactForm;
