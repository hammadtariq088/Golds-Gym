import React from "react";

const Img = ({ className, src, alt }) => {
  return <img src={src} alt={alt} className={className} />;
};

export default Img;
