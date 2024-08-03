import { ChangeEvent, FC, useState } from "react";
import { Button } from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../state/store";
import { CounterStateTypes, setCounterValueAC } from "../state/counter-reducer";

type PropsType = {
  blockingConditions: boolean;
};

export const SettingCounterWithRedux: FC<PropsType> = ({ blockingConditions }) => {
  const counter = useSelector<AppRootStateType, CounterStateTypes>((state) => state.counter);
  const dispatch = useDispatch();

  const [startValue, setStartValue] = useState<number>(counter.startValue);
  const [maxValue, setMaxValue] = useState<number>(counter.maxValue);

  const setStart = (event: ChangeEvent<HTMLInputElement>) => {
    setStartValue(Number(event.currentTarget.value));
  };
  const setMax = (event: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(Number(event.currentTarget.value));
  };

  const setCounterValue = () => {
    dispatch(setCounterValueAC(startValue, maxValue));
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
        <Button disabled={blockingConditions} onClick={setCounterValue} name="set" />
      </div>
    </div>
  );
};
