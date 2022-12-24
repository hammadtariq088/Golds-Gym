import React from "react";
import Img from "../Img";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <div className="row mt-5">
      <div className="col-12">
        <div className="product-area">
          <div className="section-title">
            <h2 className="title">
              WATCH&nbsp;
              <span style={{ color: "#e5ba03", textTransform: "capitalize" }}>
                {name}
              </span>
              &nbsp;EXERCISE VIDEOS
            </h2>
          </div>
          <div className="row">
            {exerciseVideos.slice(0, 3).map((item, index) => {
              const { videoId, thumbnails, title, channelName } = item.video;
              return (
                <div className="col-sm-4" key={index}>
                  <div className="product-item mb-xs-30">
                    <div className="product-thumb">
                      <a
                        href={`https://www.youtube.com/watch?v=${videoId}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Img src={thumbnails[0].url} alt={title} />
                      </a>
                      <div className="ribbons">
                        <span className="ribbon ribbon-hot">HOT</span>
                      </div>
                    </div>
                    <div className="product-info">
                      <h4 className="title">
                        <a
                          href={`https://www.youtube.com/watch?v=${videoId}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {title}
                        </a>
                      </h4>
                      <div className="prices">
                        <span className="price"><b>Channel: </b>{channelName}</span>
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
  );
};

export default ExerciseVideos;
