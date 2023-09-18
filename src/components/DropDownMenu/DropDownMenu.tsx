import React, { useState } from "react";
import styles from "./DropDownMneu.module.scss";
import Select from "react-select";

const options = [
  { value: "sl", label: "s1mple l33t" },
  { value: "ml", label: "^^1[)113 13\\/31" },
  { value: "hl", label: "|-|42[) 1337" },
];

export default function DropDownMenu(props: any) {

  const [selectedLeve, setSelectedLevel] = useState("sl");

  return <Select options={options} 
  classNames={{
    control: (state) =>
      state.isFocused ? 'red' : 'yellow',
  }}
  
   />;
}
