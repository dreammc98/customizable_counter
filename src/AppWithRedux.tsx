import React, { useState } from "react";
import "./styles.css";
import { CounterWithRedux } from "./components/CounterWithRedux";
import { useSelector } from "react-redux";
import { AppRootStateType } from "./state/store";
import { SettingCounterWithRedux } from "./components/SettingCounterWithRedux";

function AppWithRedux() {
  const startValue = useSelector<AppRootStateType, number>((state) => state.counter["startValue"]);
  const maxValue = useSelector<AppRootStateType, number>((state) => state.counter["maxValue"]);
  const instructions = useSelector<AppRootStateType, boolean>(
    (state) => state.counter["instructions"]
  );

  const blockingConditions =
    startValue === maxValue || startValue < 0 || maxValue < 0 || startValue > maxValue;

  return (
    <div className="App">
      {instructions ? (
        <SettingCounterWithRedux blockingConditions={blockingConditions} />
      ) : (
        <CounterWithRedux
          blockingConditions={blockingConditions}
          startValue={startValue}
          maxValue={maxValue}
        />
      )}
    </div>
  );
}

export default AppWithRedux;
