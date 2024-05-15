import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const [output, setOutput] = useState("");

  const specialChars = ["%", "*", "/", "-", "+", "=", "(", ")"];

  const calculate = (btnValue) => {
    let tempOutput = output;

    if (btnValue === "=") {
      try {
        eval(tempOutput);
      } catch (error) {
        setOutput("Syntax Error");
        return;
      }

      if (tempOutput.trim() === "") {
        setOutput("Syntax Error");
        return;
      }

      tempOutput = eval(tempOutput.replace("%", "/100")).toString();
    } else if (btnValue === "AC") {
      tempOutput = "";
    } else if (btnValue === "DEL") {
      tempOutput = tempOutput.slice(0, -1);
    } else {
      if (tempOutput === "" && btnValue === "-") {
        tempOutput += btnValue;
      } else if (
        (btnValue === "-" || btnValue === "(") &&
        (tempOutput === "" || specialChars.includes(tempOutput.slice(-1)))
      ) {
        tempOutput += btnValue;
      } else {
        if (btnValue === "(" && !specialChars.includes(tempOutput.slice(-1))) {
          tempOutput += "*";
        }

        if (
          (btnValue === "-" &&
            (tempOutput.slice(-1) !== "-" &&
              !tempOutput.endsWith(" ") &&
              !tempOutput.endsWith("("))) ||
          (btnValue === "(" && !tempOutput.endsWith(" "))
        ) {
          tempOutput += btnValue;
        } else if (specialChars.includes(btnValue)) {
          if (specialChars.includes(tempOutput.slice(-1))) {
            tempOutput = tempOutput.slice(0, -1) + btnValue;
          } else {
            tempOutput += " " + btnValue + " ";
          }
        } else {
          tempOutput += btnValue;
        }
      }
    }

    setOutput(tempOutput);
  };

  return (
    <div className="container">
    
      <input type="text" className="display" value={output} readOnly />
      <div className="header">
        <div className="calculator-title">Calculator</div>
        <div className="header-buttons">
        <button className="ac-button" onClick={() => calculate("DEL")}>DEL</button>
          <button className="del-button" onClick={() => calculate("AC")}>AC</button>
        </div>
      </div>

      <div className="buttons">
        {["%", "/", "(", ")"].map((char) => (
          <button key={char} onClick={() => calculate(char)}>{char}</button>
        ))}
        {["7", "8", "9", "*"].map((char) => (
          <button key={char} onClick={() => calculate(char)}>{char}</button>
        ))}
        {["4", "5", "6", "-"].map((char) => (
          <button key={char} onClick={() => calculate(char)}>{char}</button>
        ))}
        {["1", "2", "3", "+"].map((char) => (
          <button key={char} onClick={() => calculate(char)}>{char}</button>
        ))}
        {["0", "00", ".", "="].map((char) => (
          <button key={char} onClick={() => calculate(char)}>{char}</button>
        ))}
      </div>
    </div>
  );
};


export default Calculator;
