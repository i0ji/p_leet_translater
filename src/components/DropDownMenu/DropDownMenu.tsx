import Select from "react-select";
import styles from "./DropDownMenu.module.scss";
//import "./DropDownMenu.scss"
// import { DropDownMenuStyles } from "./DropDownMenuStyles";

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
      classNames={{
        control: (state) => {
          state.isFocused ? "border-red-600" : "border-grey-300"},
        option: () => {
          backgroundColor: 'red'
        }  
      }}
      value={props.selectedLevel}
      defaultValue={options[0]}
      onChange={handleLevelChange}
      options={options}
      // classNamePrefix={'dd'}
      menuPlacement={"top"}
      hideSelectedOptions={true}
    />
  );
}
