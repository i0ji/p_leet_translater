import React, {useState} from "react";
import styles from "./TextBlock.module.scss";
import ConvertButton from "../ConverterButton/ConverterButton";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import {converter} from '../../scripts/converter.ts';
import * as int from "../../Interface";
import {IOptions} from "../../Interface";

export default function TextBlock() {
    const [inputText, setInputText] = useState<string>("");
    const [outputText, setOutputText] = useState<string>("");

    const initialStateLevel: IOptions = {value: "sl", label: "5!mp13 1337"};
    const [selectedLevel, setSelectedLevel] = useState<int.IOptions>(initialStateLevel);

    const handleLevelChange = (selectedLevel: int.IOptions): IOptions | void => {
        setSelectedLevel(selectedLevel);
        console.log(selectedLevel.value);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(e.target.value);
    };

    const handleTransformClick = () => {
        setOutputText(converter(inputText, selectedLevel.value));
    };

    return (
        <div className={styles.text_block}>
      <textarea
          placeholder="Your text here"
          className={styles.text_block__input_block}
          onChange={handleInputChange}
          value={inputText}
      ></textarea>

            <div className={styles.text_block__center_block}>
                <ConvertButton onClick={handleTransformClick}/>

                <DropDownMenu onLevelChange={handleLevelChange} selectedLevel={selectedLevel}/>
            </div>

            <div className={styles.text_block__output_block}>{outputText}</div>
        </div>
    );
}