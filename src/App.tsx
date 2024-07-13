import React, { useState } from "react";
import logo from "./logo.svg";
import "./styles.css";
import { Counter } from "./components/Counter";
import { SettingCounter } from "./components/SettingCounter";

function App() {
  const locStorMaxValue = () => {
    const maxValue = localStorage.getItem("maxValue");
    if (maxValue !== null) {
      return parseFloat(maxValue);
    } else {
      return 5;
    }
  };
  const locStorStartValue = () => {
    const startValue = localStorage.getItem("startValue");
    if (startValue !== null) {
      return parseFloat(startValue);
    } else {
      return 0;
    }
  };
  const [isSetting, setIsSetting] = useState(false);
  const [startValue, setStartValue] = useState<number>(locStorStartValue);
  const [maxValue, setMaxValue] = useState(locStorMaxValue);
  const [count, setCount] = useState<number>(locStorStartValue);
  const [maxCount, setMaxCount] = useState<number>(locStorMaxValue);
  const [instructions, setInstructions] = useState<boolean>(false);

  const setsTheSettingValue = () => {
    setIsSetting(!isSetting);
  };

  const inc = () => {
    setCount(count + 1);
  };

  const setStartValueInCount = () => {
    setCount(startValue);
    setMaxCount(maxValue);
    setInstructions(false);
    localStorage.setItem("startValue", startValue.toString());
    localStorage.setItem("maxValue", maxValue.toString());
    setsTheSettingValue();
  };

  if (startValue < 0 && instructions === false) {
    setInstructions(true);
    console.log(instructions);
  }

  if (startValue === maxValue) {
  }

  const blockingСonditions =
    startValue === maxValue || startValue < 0 || maxValue < 0 || startValue > maxValue;

  return (
    <div className="App">
      {isSetting ? (
        <SettingCounter
          setStartValueInCount={setStartValueInCount}
          startValue={startValue}
          setStartValue={setStartValue}
          setMaxValue={setMaxValue}
          maxValue={maxValue}
          blockingСonditions={blockingСonditions}
        />
      ) : (
        <Counter
          instructions={instructions}
          maxCount={maxCount}
          count={count}
          setCount={setCount}
          startValue={startValue}
          inc={inc}
          blockingСonditions={blockingСonditions}
          setsTheSettingValue={setsTheSettingValue}
        />
      )}
    </div>
  );
}

export default App;
