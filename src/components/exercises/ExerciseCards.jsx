import React from "react";
import Img from "../Img";
import LinkButton from "../LinkButton";
import { Link } from "react-router-dom";
const ExerciseCards = ({ currentExercises }) => {
  return (
    <section className="product-area product-grid-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="product-content-area">
              <div className="row">
                {currentExercises &&
                  currentExercises.map((exercisesList) => {
                    const { id, bodyPart, gifUrl, name, target } =
                      exercisesList;
                    return (
                      <div className="col-sm-6 col-md-4 col-lg-3" key={id}>
                        <div className="product-item">
                          <div className="product-thumb">
                            <Link href="shop-single-product.html">
                              <Img src={gifUrl} alt="Image" />
                            </Link>
                            <div className="product-action">
                              <LinkButton
                                className="btn-theme"
                                url={`/exercisedetails/${id}`}
                              >
                                View More
                              </LinkButton>
                            </div>
                          </div>
                          <div className="product-info">
                            <h4 className="title">
                              <Link to={`/exercisedetails/${id}`}>{name}</Link>
                            </h4>
                            <div className="prices d-flex justify-content-between">
                              <span className="price">{bodyPart}</span>
                              <span className="price">{target}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExerciseCards;
