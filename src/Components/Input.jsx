import React from "react";

const Input = ({ className, type, placeholder, name }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      name={name}
    />
  );
};

export default Input;
