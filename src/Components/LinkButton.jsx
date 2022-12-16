import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ url, className, children }) => {
  return (
    <Link to={url} className={className}>
      {children}
    </Link>
  );
};

export default LinkButton;
