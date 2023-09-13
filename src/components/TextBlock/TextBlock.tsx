import React, { useState } from "react";
import styles from "./TextBlock.module.scss";
import ConvertButton from "../ConvertButton/ConvertButton";
import { converter } from "../../scripts/converter";

export default function TextBlock() {
  const [inputText, setInputText] = useState<string>("");
  const [outputText, setOutputText] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleTransformClick = () => {
    setOutputText(converter(inputText));
  };

  return (
    <div className={styles.textBlock}>
      <textarea
        placeholder="Your text here"
        className={styles.textBlock__inputBlock}
        value={inputText}
        onChange={handleInputChange}
      ></textarea>

      <ConvertButton onClick={handleTransformClick}/>

      <div className={styles.textBlock__outputBlock}>
        {outputText}
      </div>
    </div>
  );
}