import React, { useState } from 'react'
import ConvertButton from '../ConvertButton/ConvertButton';


export default function TestComponent() {
  const [inputText, setInputText] = useState<string>('');
  const [outputText, setOutputText] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleTransformClick = () => {
    setOutputText(inputText.charAt(0).toUpperCase() + inputText.slice(1));
  };

  return (
    <div className="App">
      <h1>Текст с заглавной буквы</h1>
      <input
        type="text"
        placeholder="Введите текст"
        value={inputText}
        onChange={handleInputChange}
      />

<div onClick={handleTransformClick}>
<ConvertButton >GOGO</ConvertButton>
</div>

      {/* <button onClick={handleTransformClick}>Преобразовать</button> */}


      {outputText && <p>Результат: {outputText}</p>}
    </div>
  );
}