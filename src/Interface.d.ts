import {MenuPlacement, MenuPosition} from "react-select";

export interface IOptions {
    label?: string;
    value: string;
    onLevelChange?: (selectedLevel: IOptions) => void;
}

export interface IDropDownProps {
    onLevelChange: (selectedLevel: IOptions) => void;
    selectedLevel: IOptions;
}

export interface IAttributes {
    styles?: function;
    value?: IOptions.value;
    defaultValue?: IOptions.value;
    onChange?: (selectedLevel: IOptions) => void;
    options?: IOptions[];
    menuPlacement?: MenuPlacement | undefined;
    hideSelectedOptions?: boolean;
    isSearchable?: boolean,
    menuPosition?: MenuPosition | undefined,
}