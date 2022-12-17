import React, { useState } from "react";
import { exerciseCards } from "../../utils";

const FeatureCards = () => {
  const [featureCards, setfeatureCards] = useState(exerciseCards);
  return (
    <section class="features-area features-default-area">
      <div class="container-fluid p-0">
        <div class="row row-gutter-0">
          {featureCards.map((featureCards) => {
            return (
              <div class="col-sm-6 col-lg-3" key={featureCards.id}>
                <div class="featured-item">
                  <div class="featured-thumb">
                    <img src={featureCards.src} alt="Image" />
                  </div>
                  <div class="featured-info">
                    <h4>{featureCards.title}</h4>
                    <h5>
                      {featureCards.sets} <span>{featureCards.mins}</span>
                    </h5>
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

export default FeatureCards;
