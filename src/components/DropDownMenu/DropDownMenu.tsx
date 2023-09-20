import React from "react";
import "./DropDownMenu.scss";
import Select from "react-select";

const options = [
  { value: "sl", label: "s1mple l33t" },
  { value: "ml", label: "^^1[)113 13\\/31" },
  { value: "hl", label: "|-|42[) 1337" },
];

export default function DropDownMenu(props: any) {
  const handleLevelChange = (selectedLevel: any) => {
    props.onLevelChange(selectedLevel);
  };

  return (
    <Select
      value={props.selectedLevel}
      defaultValue={options[0]}
      onChange={handleLevelChange}
      options={options}
    />
  );
}