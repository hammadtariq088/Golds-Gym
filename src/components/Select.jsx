import React from "react";

const Select = ({ option1, option2, name, onChange, value }) => {
  return (
    <select
      className="form-select form-select-lg form-control"
      name={name}
      onChange={onChange}
      value={value}
    >
      <option value="" selected>
        Select
      </option>
      <option value={option1}>{option1}</option>
      <option value={option2}>{option2}</option>
    </select>
  );
};

export default Select;
