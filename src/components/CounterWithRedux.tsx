import { useDispatch, useSelector } from "react-redux";
import { Button } from "./Button";
import { AppRootStateType } from "../state/store";
import {
  CounterStateTypes,
  counterSettingAC,
  incrementCountAC,
  resetCountAC,
} from "../state/counter-reducer";

type CounterPropsType = {
  blockingConditions: boolean;
  startValue: number;
  maxValue: number;
};

export const CounterWithRedux = ({
  blockingConditions,
  startValue,
  maxValue,
}: CounterPropsType) => {
  const counter = useSelector<AppRootStateType, CounterStateTypes>((state) => state.counter);
  const dispatch = useDispatch();

  const incrementCount = () => {
    dispatch(incrementCountAC());
  };

  const resetCount = () => {
    dispatch(resetCountAC());
  };

  const counterSetting = () => {
    dispatch(counterSettingAC());
  };

  return (
    <div className="wrapper">
      {blockingConditions ? (
        <div className="counter warning">Incorrect value!</div>
      ) : (
        <div
          className={counter.instructions ? "counter instructions" : "counter"}
          style={counter.count === maxValue ? { color: "red" } : {}}
        >
          {counter.instructions ? "enter values and press 'set'" : counter.count}
        </div>
      )}

      <div className="buttons">
        <Button
          disabled={counter.count === maxValue || blockingConditions}
          name="inc"
          onClick={incrementCount}
        />
        <Button
          disabled={counter.count === 0 || blockingConditions}
          onClick={resetCount}
          name="reset"
        />
        <Button name="set" onClick={counterSetting} />
      </div>
    </div>
  );
};
