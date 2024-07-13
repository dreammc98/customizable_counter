import { ChangeEvent, FC } from "react";
import { Button } from "./Button";

type PropsType = {
  startValue: number;
  setStartValue: (value: number) => void;
  setStartValueInCount: () => void;
  maxValue: number;
  setMaxValue: (value: number) => void;
  blockingСonditions: boolean;
};

export const SettingCounter: FC<PropsType> = ({
  startValue,
  setStartValue,
  setStartValueInCount,
  setMaxValue,
  maxValue,
  blockingСonditions,
}) => {
  const setStart = (event: ChangeEvent<HTMLInputElement>) => {
    setStartValue(Number(event.currentTarget.value));
  };
  const setMax = (event: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(Number(event.currentTarget.value));
  };

  const warningInput = {
    backgroundColor: "#ff000077",
    border: "red solid 2px",
    outline: "red",
  };

  return (
    <div className="wrapper">
      <div className="setting">
        <div className="wrapper-inputs">
          <label htmlFor="in1">max value:</label>
          <input
            id="in1"
            type="number"
            onChange={setMax}
            value={maxValue}
            style={
              maxValue < 0 || startValue === maxValue || startValue > maxValue ? warningInput : {}
            }
          />
        </div>
        <div className="wrapper-inputs">
          <label htmlFor="in2">start value:</label>
          <input
            value={startValue}
            onChange={setStart}
            id="in2"
            type="number"
            style={
              startValue < 0 || startValue === maxValue || startValue > maxValue ? warningInput : {}
            }
          />
        </div>
      </div>
      <div className="buttons btn-set">
        <Button disabled={blockingСonditions} onClick={setStartValueInCount} name="set" />
      </div>
    </div>
  );
};
