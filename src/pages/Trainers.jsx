import React, { useState } from "react";
import Img from "../components/Img";
import { Link } from "react-router-dom";
import { trainerData } from "../utils";

const Trainers = () => {
  const [trainers, setTrainers] = useState(trainerData);
  return (
    <main class="main-content">
      {/* <!--== Start Page Title Area ==--> */}
      <section class="page-title-area bg-img trainer-bg-hero">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="page-title-content">
                <h2 class="title">
                  <span>OUR</span>
                  <br />
                  TRAINERS
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--== End Page Title Area ==--> */}

      {/* <!--== Start Team Area ==--> */}
      <section class="team-area team-inner-area">
        <div class="container">
          <div class="row">
            {trainers.map((trainers) => {
              const { id, src, name, dsgn, rating, text } = trainers;
              return (
                <div class="col-sm-6 col-md-4 col-lg-3" key={id}>
                  {/* <!-- Start Team Item --> */}
                  <div class="team-item">
                    <div class="team-member">
                      <div class="thumb">
                        <Img src={src} alt="Image" />
                      </div>
                      <div class="content">
                        <div class="member-info">
                          <h4 class="name">{name}</h4>
                          <h6 class="designation">{dsgn}</h6>
                          <Img src={rating} alt="rating" />
                          <div class="team-footer">
                            <Link class="btn" to="#">
                              {text}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Team Item --> */}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* <!--== End Team Area ==--> */}
    </main>
  );
};

export default Trainers;
