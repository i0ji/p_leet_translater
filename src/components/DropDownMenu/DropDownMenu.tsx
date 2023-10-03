import Select from "react-select";
import { useState } from "react";

import { DropDownMenuStyles } from "./DropDownMenuStyles";

const options = [
  { value: "sl", label: "5!mp13 1337" },
  { value: "ml", label: "^^1[)113 13\\/31" },
  { value: "hl", label: "|-|42[) 1337" },
];

export default function DropDownMenu(props: any) {
  const handleLevelChange = (selectedLevel: any) => {
    props.onLevelChange(selectedLevel);
  };

  return (
    <Select
      styles={DropDownMenuStyles}
      value={props.selectedLevel}
      defaultValue={options[0]}
      onChange={handleLevelChange}
      options={options}
      menuPlacement={"top"}
      hideSelectedOptions={false}
      isSearchable={false}
      menuPosition={'fixed'}
      //  menuIsOpen={true}
    />
  );
}