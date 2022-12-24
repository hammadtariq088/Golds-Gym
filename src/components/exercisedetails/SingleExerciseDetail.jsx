import React from "react";
import Img from "../Img";

const SingleExerciseDetail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const moreDetail = [
    {
      icon: "/assets/img/icons/bodypart.png",
      name: bodyPart,
    },
    {
      icon: "/assets/img/icons/target.png",
      name: target,
    },
    {
      icon: "/assets/img/icons/equipment.png",
      name: equipment,
    },
  ];
  return (
    <div className="row row-gutter-0">
      <div className="col-md-6">
        <div className="single-product-thumb">
          <div className="thumb-item">
            <a className="lightbox-image" data-fancybox="gallery" href="#">
              <Img src={gifUrl} alt={name} />
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="single-product-info">
          <h4 className="title">{name}</h4>
          <p className="product-desc">
            Exercises keep you strong.&nbsp;
            <span
              style={{
                textTransform: "capitalize",
                color: "#e5ba03",
                fontWeight: "bold",
              }}
            >
              {name}
            </span>
            &nbsp;bup is one of the best <br /> exercises to target your&nbsp;
            <b>{target}</b>. It will help you improve your <br /> mood and gain
            energy.
          </p>
          <div className="single-product-desc">
            {moreDetail.map((moreInfo, index) => {
              const { icon, name } = moreInfo;
              return (
                <div className="product-stock" key={index}>
                  <h5 className="title">
                    <Img src={icon} alt={name} className="exercise-icons" /> :
                    <span>{name}</span>
                  </h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleExerciseDetail;
