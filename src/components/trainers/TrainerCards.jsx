import React from "react";
import Img from "../Img";
import LinkButton from "../LinkButton";

const TrainerCards = ({ trainers }) => {
  return (
    <section className="team-area team-inner-area">
      <div className="container">
        <div className="row">
          {trainers.map((trainers) => {
            const { id, src, name, dsgn, rating, text } = trainers;
            return (
              <div className="col-sm-6 col-md-4 col-lg-3" key={id}>
                <div className="team-item">
                  <div className="team-member">
                    <div className="thumb">
                      <Img src={src} alt="Image" />
                    </div>
                    <div className="content">
                      <div className="member-info">
                        <h4 className="name">{name}</h4>
                        <h6 className="designation">{dsgn}</h6>
                        <Img src={rating} alt="rating" />
                        <div className="team-footer">
                          <LinkButton className="btn" url="#">
                            {text}
                          </LinkButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrainerCards;
