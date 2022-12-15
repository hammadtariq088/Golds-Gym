import React from "react";
import homeright from '../images/h1.png'
import Classes from "./Classes";
import Discount from "./Discount";
import Hometrainers from "./Hometrainers";
import Workout from "./Workout";
const Home = () => {
  return (
    
    <main className="main-content">
      {/*== Start Hero Area Wrapper ==*/}
      <section className="home-slider-area slider-default bg-dark">
        <div className="home-slider-content">
          <div className="swiper-container home-slider-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                {/* Start Slide Item */}
                <div className="home-slider-item">
                  <div
                    className="bg-thumb bg-img"
                    data-bg-img=''
                  />
                  <div className="slider-content-area">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-sm-8 offset-sm-2 col-lg-5 offset-lg-0">
                          <div className="content">
                            <div className="inner-content">
                              <h2>
                                Time <span>To</span> <span>Get</span> Fit
                              </h2>
                              <p>
                                Gym is very important to maintain our health
                                luptas sit fugit, sed quia cuuntur magni dolores
                                eos qui rat ione volupta
                              </p>
                              <a href="contact.html" className="btn-theme">
                                Contact Now
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7 col-lg-7">
                          <div className="slider-thumb">
                            <img src={homeright} alt="Image" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Slide Item */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*== End Hero Area Wrapper ==*/}
      {/*== Start Features Area Wrapper ==*/}
      <section className="features-area features-default-area">
        <div className="container-fluid p-0">
          <div className="row row-gutter-0">
            <div className="col-sm-6 col-lg-3">
              {/* Start Featured Item */}
              <div className="featured-item">
                <div className="featured-thumb">
                  <img src="assets/img/class/f2.jpg" alt="Image" />
                </div>
                <div className="featured-info">
                  <h4>Dumble Lifting</h4>
                  <h5>
                    3 SETS, <span>5 MINUTES</span>
                  </h5>
                </div>
              </div>
              {/* End Featured Item */}
            </div>
            <div className="col-sm-6 col-lg-3">
              {/* Start Featured Item */}
              <div className="featured-item">
                <div className="featured-thumb">
                  <img src="assets/img/class/f2.jpg" alt="Image" />
                </div>
                <div className="featured-info">
                  <h4>Weight lifting</h4>
                  <h5>
                    4 SETS, <span>3 MINUTES</span>
                  </h5>
                </div>
              </div>
              {/* End Featured Item */}
            </div>
            <div className="col-sm-6 col-lg-3">
              {/* Start Featured Item */}
              <div className="featured-item">
                <div className="featured-thumb">
                  <img src="assets/img/class/f3.jpg" alt="Image" />
                </div>
                <div className="featured-info">
                  <h4>
                    Abs
                    <br />
                    fitness
                  </h4>
                  <h5>
                    2 SETS, <span>3 MINUTES</span>
                  </h5>
                </div>
              </div>
              {/* End Featured Item */}
            </div>
            <div className="col-sm-6 col-lg-3">
              {/* Start Featured Item */}
              <div className="featured-item">
                <div className="featured-thumb">
                  <img src="assets/img/class/f4.jpg" alt="Image" />
                </div>
                <div className="featured-info">
                  <h4>Ropes lifting</h4>
                  <h5>
                    5 SETS, <span>3 MINUTES</span>
                  </h5>
                </div>
              </div>
              {/* End Featured Item */}
            </div>
          </div>
        </div>
      </section>
      {/*== End Features Area Wrapper ==*/}
      


      <Hometrainers/>






      {/*== Start Features Area Wrapper ==*/}
      
      <Discount/>

      <Classes/>
      <Workout/>

      {/*== End Features Area Wrapper ==*/}
      {/*== Start Service Area ==*/}
      
      {/*== End Service Area ==*/}
      {/*== Start Service Area ==*/}
     
      {/*== End Service Area ==*/}
      {/*== Start Gallery Slider Area Wrapper ==*/}
      {/* <section className="gallery-area gallery-default-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xl-4 pr-0">
              <div
                className="section-title stitle-style2"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <div className="subtitle">FITNESS GALLERY</div>
                <h2 className="title">
                  BELIEVE IN{" "}
                  <span>
                    YOURSELF, <br />
                    BE FIT{" "}
                  </span>
                  &amp; HEALTHIER
                </h2>
              </div>
            </div>
            <div className="col-md-6 col-xl-8 d-none d-md-block text-center text-md-end">
              <a href="classes.html" className="btn-theme">
                VIEW ALL
              </a>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-md-12">
              <div className="gallery-slider-content">
                <div className="swiper-container gallery-slider-container">
                  <div className="swiper-wrapper gallery-slider">
                    <div className="swiper-slide">
                      <div className="gallery-item">
                        <div className="thumb">
                          <a
                            className="lightbox-image"
                            data-fancybox="gallery"
                            href="assets/img/gallery/g1.png"
                          >
                            <img src="assets/img/gallery/g1.png" alt="Image" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="gallery-item">
                        <div className="thumb">
                          <a
                            className="lightbox-image"
                            data-fancybox="gallery"
                            href="assets/img/gallery/g2.png"
                          >
                            <img src="assets/img/gallery/g2.png" alt="Image" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="gallery-item">
                        <div className="thumb">
                          <a
                            className="lightbox-image"
                            data-fancybox="gallery"
                            href="assets/img/gallery/g3.png"
                          >
                            <img src="assets/img/gallery/g3.png" alt="Image" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="gallery-item">
                        <div className="thumb">
                          <a
                            className="lightbox-image"
                            data-fancybox="gallery"
                            href="assets/img/gallery/g4.png"
                          >
                            <img src="assets/img/gallery/g4.png" alt="Image" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*== End Gallery Slider Area Wrapper ==*/}
      {/*== Start Team Area ==*/}
      <section className="team-area team-default-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <h2 className="title">
                  PROFESSIONAL <span>INSTRUCTORS</span>
                </h2>
                <div className="desc">
                  <p>
                    Gym classes dolor sit amet, consectetur adipiscing elit, sed
                    do eiod tempor <br />
                    didunt ut labore et dolore m et dolore magna aliqua minim
                    niam
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-up" data-aos-duration={1100}>
            <div className="col-sm-6 col-lg-3">
              {/* Start Team Item */}
              <div className="team-item mb-md-30">
                <div className="team-member">
                  <div className="thumb">
                    <a href="team-details.html">
                      <img src="assets/img/team/1.jpg" alt="Image" />
                    </a>
                  </div>
                  <div className="content">
                    <div className="member-info">
                      <h4 className="name">
                        <a href="team-details.html">Robert Cristopher</a>
                      </h4>
                      <h6 className="designation">Bodybuilding Trainer</h6>
                      <div className="social-icons">
                        <a href="#/">
                          <i className="fa fa-facebook icon" />
                        </a>
                        <a href="#/">
                          <i className="fa fa-phone icon" />
                        </a>
                        <a href="#/">
                          <i className="fa fa-instagram icon" />
                        </a>
                        <a href="#/">
                          <i className="fa fa-twitter icon" />
                        </a>
                      </div>
                      <div className="team-footer">
                        <a className="btn" href="team-details.html">
                          VIEW PROFILE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Team Item */}
            </div>
            <div className="col-sm-6 col-lg-3">
              {/* Start Team Item */}
              <div className="team-item mb-md-30">
                <div className="team-member">
                  <div className="thumb">
                    <a href="team-details.html">
                      <img src="assets/img/team/2.jpg" alt="Image" />
                    </a>
                  </div>
                  <div className="content">
                    <div className="member-info">
                      <h4 className="name">
                        <a href="team-details.html">Oliviea Williams</a>
                      </h4>
                      <h6 className="designation">Fitness Trainer</h6>
                      <div className="social-icons">
                        <a href="#/">
                          <i className="fa fa-facebook icon" />
                        </a>
                        <a href="#/">
                          <i className="fa fa-phone icon" />
                        </a>
                        <a href="#/">
                          <i className="fa fa-instagram icon" />
                        </a>
                        <a href="#/">
                          <i className="fa fa-twitter icon" />
                        </a>
                      </div>
                      <div className="team-footer">
                        <a className="btn" href="team-details.html">
                          VIEW PROFILE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Team Item */}
            </div>
            <div className="col-sm-6 col-lg-3">
              {/* Start Team Item */}
              <div className="team-item mb-xs-30">
                <div className="team-member">
                  <div className="thumb">
                    <a href="team-details.html">
                      <img src="assets/img/team/3.jpg" alt="Image" />
                    </a>
                  </div>
                  <div className="content">
                    <div className="member-info">
                      <h4 className="name">
                        <a href="team-details.html">Nikolus Smith</a>
                      </h4>
                      <h6 className="designation">Crossfit Trainer</h6>
                      <div className="social-icons">
                        <a href="#/">
                          <i className="fa fa-facebook icon" />
                        </a>
                        <a href="#/">
                          <i className="fa fa-phone icon" />
                        </a>
                        <a href="#/">
                          <i className="fa fa-instagram icon" />
                        </a>
                        <a href="#/">
                          <i className="fa fa-twitter icon" />
                        </a>
                      </div>
                      <div className="team-footer">
                        <a className="btn" href="team-details.html">
                          VIEW PROFILE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Team Item */}
            </div>
            <div className="col-sm-6 col-lg-3">
              {/* Start Team Item */}
              <div className="team-item">
                <div className="team-member">
                  <div className="thumb">
                    <a href="team-details.html">
                      <img src="assets/img/team/4.jpg" alt="Image" />
                    </a>
                  </div>
                  <div className="content">
                    <div className="member-info">
                      <h4 className="name">
                        <a href="team-details.html">Jenifer Parker</a>
                      </h4>
                      <h6 className="designation">Aerobics Instructor</h6>
                      <div className="social-icons">
                        <a href="#/">
                          <i className="fa fa-facebook icon" />
                        </a>
                        <a href="#/">
                          <i className="fa fa-phone icon" />
                        </a>
                        <a href="#/">
                          <i className="fa fa-instagram icon" />
                        </a>
                        <a href="#/">
                          <i className="fa fa-twitter icon" />
                        </a>
                      </div>
                      <div className="team-footer">
                        <a className="btn" href="#/">
                          VIEW PROFILE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Team Item */}
            </div>
          </div>
        </div>
      </section>
      {/*== End Team Area ==*/}
      {/*== Start Testimonial Area ==*/}
      <section className="testimonial-area testimonial-default-area position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title stitle-style2">
                <div className="subtitle">TESTIMONIALS</div>
                <h2 className="title">
                  THAT’S{" "}
                  <span>
                    WHAT OUR
                    <br />
                    CLIENT{" "}
                  </span>
                  SAYS
                </h2>
              </div>
              <div
                className="testimonial-content"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <div className="testimonial-slider-content">
                  <div className="swiper-container testimonial-slider-container">
                    <div className="swiper-wrapper testimonial-slider">
                      <div className="swiper-slide testimonial-single">
                        <div className="client-content">
                          <p>
                            “Getshape is very smart and technical sound gym,
                            which maintain professional trainer as well as
                            modern equipments. to maintain our health luptas sit
                            fugit, sed quia cuuntur mag dolores eos qui rat ione
                            volupta pleasure rationally”
                          </p>
                          <img
                            className="quote-icon"
                            src="assets/img/icons/quote-icon.png"
                            alt="Icon"
                          />
                        </div>
                        <div className="client-info">
                          <h4 className="name">Stephen Fleming</h4>
                          <h6 className="designation">Mariland, USA</h6>
                        </div>
                      </div>
                      <div className="swiper-slide testimonial-single">
                        <div className="client-content">
                          <p>
                            “Getshape is very smart and technical sound gym,
                            which maintain professional trainer as well as
                            modern equipments. to maintain our health luptas sit
                            fugit, sed quia cuuntur mag dolores eos qui rat ione
                            volupta pleasure rationally”
                          </p>
                          <img
                            className="quote-icon"
                            src="assets/img/icons/quote-icon.png"
                            alt="Icon"
                          />
                        </div>
                        <div className="client-info">
                          <h4 className="name">Stephen Fleming</h4>
                          <h6 className="designation">Mariland, USA</h6>
                        </div>
                      </div>
                      <div className="swiper-slide testimonial-single">
                        <div className="client-content">
                          <p>
                            “Getshape is very smart and technical sound gym,
                            which maintain professional trainer as well as
                            modern equipments. to maintain our health luptas sit
                            fugit, sed quia cuuntur mag dolores eos qui rat ione
                            volupta pleasure rationally”
                          </p>
                          <img
                            className="quote-icon"
                            src="assets/img/icons/quote-icon.png"
                            alt="Icon"
                          />
                        </div>
                        <div className="client-info">
                          <h4 className="name">Stephen Fleming</h4>
                          <h6 className="designation">Mariland, USA</h6>
                        </div>
                      </div>
                    </div>
                    {/* Add Arrows */}
                    <div className="swiper-btn-wrap">
                      <div className="swiper-btn-prev">
                        <i className="fa fa-angle-left" />
                      </div>
                      <div className="swiper-btn-next">
                        <i className="fa fa-angle-right" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="bmi-calc-form bg-img"
                data-bg-img="assets/img/testimonial/1.jpg"
              >
                <div className="section-title text-center mt-0">
                  <h2 className="title">
                    BMI <span>CALCULATOR</span>
                  </h2>
                  <div className="desc">
                    <p>
                      BMI is a reliable guide to estimate the healthy weight
                      range based on height, wight and age
                    </p>
                  </div>
                </div>
                <form action="#/">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Height / cm"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Weight / kg"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Age"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <select
                          className="form-control form-select"
                          aria-label="gender select example"
                        >
                          <option selected>Gender</option>
                          <option value={1}>Female</option>
                          <option value={2}>Male</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <select
                          className="form-control form-select"
                          aria-label="activity select example"
                        >
                          <option selected>Select an activity factor</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="bmi-calc-form-footer">
                        <div className="form-group mb-0">
                          <button className="btn btn-theme" type="button">
                            CALCULATE
                          </button>
                        </div>
                        <div className="bmi-calc-result">
                          <input
                            className="form-control"
                            type="text"
                            placeholder={0.0}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-group">
          <div className="shape-img2">
            <img src="assets/img/photos/shape1.png" alt="Image" />
          </div>
        </div>
      </section>
      {/*== End Testimonial Area ==*/}
      {/*== Start Blog Area Wrapper ==*/}
      <section className="blog-area blog-default-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title">
                  LATEST <span>BLOG POST</span>
                </h2>
                <div className="desc">
                  <p>
                    Gym classes dolor sit amet, consectetur adipiscing elit, sed
                    do eiod tempor <br />
                    didunt ut labore et dolore m et dolore magna aliqua minim
                    niam
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-up" data-aos-duration={1000}>
            <div className="col-md-6 col-lg-4">
              {/*== Start Blog Post Item ==*/}
              <div className="post-item mb-md-30">
                <div className="thumb">
                  <a href="blog-details.html">
                    <img src="assets/img/blog/1.jpg" alt="Image" />
                  </a>
                </div>
                <div className="content">
                  <div className="meta">
                    <a className="category" href="blog.html">
                      <i className="fa fa-tags icon" />
                      <span> FITNESS</span>
                    </a>
                    <a className="post-date" href="blog.html">
                      <i className="fa fa-calendar icon" />
                      <span> 05 MAY, 2021</span>
                    </a>
                  </div>
                  <h4 className="title">
                    <a href="blog-details.html">
                      Perfect workout is the way to shape your body and mind
                    </a>
                  </h4>
                  <p>
                    Gym is very important to maintain our health quia cuuntur
                    magni dolores eos pleasure of mind and make you more
                    healthier
                  </p>
                </div>
              </div>
              {/*== End Blog Post Item ==*/}
            </div>
            <div className="col-md-6 col-lg-4">
              {/*== Start Blog Post Item ==*/}
              <div className="post-item mb-md-30">
                <div className="thumb">
                  <a href="blog-details.html">
                    <img src="assets/img/blog/2.jpg" alt="Image" />
                  </a>
                </div>
                <div className="content">
                  <div className="meta">
                    <a className="category" href="blog.html">
                      <i className="fa fa-tags icon" />
                      <span> YOGA</span>
                    </a>
                    <a className="post-date" href="blog.html">
                      <i className="fa fa-calendar icon" />
                      <span> 04 MAY, 2021</span>
                    </a>
                  </div>
                  <h4 className="title">
                    <a href="blog-details.html">
                      Yoga is important for both body and mind refreshment
                    </a>
                  </h4>
                  <p>
                    Gym is very important to maintain our health quia cuuntur
                    magni dolores eos pleasure of mind and make you more
                    healthier
                  </p>
                </div>
              </div>
              {/*== End Blog Post Item ==*/}
            </div>
            <div className="col-md-6 col-lg-4">
              {/*== Start Blog Post Item ==*/}
              <div className="post-item">
                <div className="thumb">
                  <a href="blog-details.html">
                    <img src="assets/img/blog/3.jpg" alt="Image" />
                  </a>
                </div>
                <div className="content">
                  <div className="meta">
                    <a className="category" href="blog.html">
                      <i className="fa fa-tags icon" />
                      <span> BODYBUILD</span>
                    </a>
                    <a className="post-date" href="blog.html">
                      <i className="fa fa-calendar icon" />
                      <span> 02 MAY, 2021</span>
                    </a>
                  </div>
                  <h4 className="title">
                    <a href="blog-details.html">
                      Give more time in workout for a great shape that you want
                    </a>
                  </h4>
                  <p>
                    Gym is very important to maintain our health quia cuuntur
                    magni dolores eos pleasure of mind and make you more
                    healthier
                  </p>
                </div>
              </div>
              {/*== End Blog Post Item ==*/}
            </div>
          </div>
        </div>
      </section>
      {/*== End Blog Area Wrapper ==*/}
    </main>
  );
};

export default Home;
