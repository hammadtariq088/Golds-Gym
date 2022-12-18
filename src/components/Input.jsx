import React from "react";

const Input = ({
  className,
  type,
  placeholder,
  name,
  onChange,
  value,
  onClick,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      name={name}
      onChange={onChange}
      onClick={onClick}
      value={value}
    />
  );
};

export default Input;
