import React from "react";
import "./DropDownMenu.scss";
import Select from "react-select";

const options = [
  { value: "sl", label: "s1mple l33t" },
  { value: "ml", label: "^^1[)113 13\\/31" },
  { value: "hl", label: "|-|42[) 1337" },
];

// const options = ["sl", "ml", "hl"];

// interface ChildProps {
//   onLevelChange: (selectedLevel: any) => void;
// }

export default function DropDownMenu(props: any) {
  // const [defaultOption, setDefaultOption] = useState<any>

  const handleLevelChange = (selectedLevel: any) => {
    props.onLevelChange(selectedLevel);
  };
  
  // const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    // <label htmlFor="select">
    //   <select
    //     name="select"
    //     value={props.selectedLevel}
    //     onChange={e => setSelectedOption(e.target.value)}
    //     defaultValue={options[0]}
    //   >
    //     <option value={options[0]}>s1mple l33t</option>
    //     <option value={options[1]}>^^1[)113 13\\/31</option>
    //     <option value={options[2]}>|-|42[) 1337</option>
    //   </select>
    // </label>

      <Select value={props.selectedLevel}
       onChange={handleLevelChange}
        options={options} />
  );
}
