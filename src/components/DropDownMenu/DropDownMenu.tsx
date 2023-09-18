import React, { useState } from "react";
import "./DropDownMenu.scss";
import Select from "react-select";

const options = [
  { value: "sl", label: "s1mple l33t" },
  { value: "ml", label: "^^1[)113 13\\/31" },
  { value: "hl", label: "|-|42[) 1337" },
];

interface ChildProps {
  onOptionChange: (selectedOption: any) => void;
}

export default function DropDownMenu(props: any) {
  const handleOptionChange = (selectedOption: any) => {
    props.onOptionChange(selectedOption);
  };

  return (
    <Select
      onChange={handleOptionChange}
      options={options}
      placeholder={"choose your destiny"}
    />
  );
}

// styles={{
//   control: (baseStyles, state) => ({
//     ...baseStyles,
//     borderColor: state.isFocused ? "grey" : "red",
//   }),
// }}
