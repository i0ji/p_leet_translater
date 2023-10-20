export interface IOptions {
    label?: string;
    value: string;
}

export interface IDropDownProps {
    onLevelChange: (selectedLevel: string) => void;
    selectedLevel: string;
}

export interface ITextBlockState {
    inputText: string;
    outputText: string;
    selectedLevel: string;
}

export interface IFocused {
    isFocused: boolean;
}

export interface IAttributes {
    styles?: function;
    value?: IOptions.value;
    defaultValue?: IOptions.value;
    onChange?: function;
    options?: IOptions[];
    menuPlacement?: string;
    hideSelectedOptions?: boolean;
    isSearchable?: boolean,
    menuPosition?: string,
}