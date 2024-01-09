import Select from "react-select";
import * as int from "../../Interface"
import { DropDownMenuStyles } from "./DropDownMenuStyles";

export default function DropDownMenu({onLevelChange, selectedLevel}: int.IDropDownProps) {



    const handleLevelChange = (selectedLevel: int.IOptions): void => {
        onLevelChange(selectedLevel);
    };

    const options: int.IOptions[] = [
        { value: "sl", label: "5!mp13 1337" },
        { value: "ml", label: "|\\/|1[)[)13   13\\/31" },
        { value: "hl", label: "#/-\\/2|) ([]/2|-"},
    ];

    const attributes: int.IAttributes = {
        styles: DropDownMenuStyles,
        value: selectedLevel,
        defaultValue: options[0],
        onChange: handleLevelChange,
        options: options,
        menuPlacement: 'top',
        hideSelectedOptions: false,
        isSearchable: false,
        menuPosition: 'fixed',
    }

    return (
        <Select
            {...attributes}

        />
    );
}