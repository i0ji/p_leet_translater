import React, {useState} from "react";
import styles from "./TextBlock.module.scss";
import ConvertButton from "../ConvertButton/ConvertButton";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import {converter} from "../../scripts/converter";

export default function TextBlock() {
    const [inputText, setInputText] = useState<string>("");
    const [outputText, setOutputText] = useState<string>("");

    const [selectedLevel, setSelectedLevel] = useState<any>("sl");

    const handleLevelChange = (selectedLevel: any) => {
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

                <DropDownMenu onLevelChange={handleLevelChange}/>
            </div>

            <div className={styles.text_block__output_block}>{outputText}</div>
        </div>
    );
}
