import { Button } from "./Button";

type CounterPropsType = {
  count: number;
  setCount: (count: number) => void;
  startValue: number;
  inc: () => void;
  maxCount: number;
  instructions: boolean;
  blockingСonditions: boolean;
  setsTheSettingValue: () => void;
};

export const Counter = ({
  count,
  setCount,
  inc,
  maxCount,
  startValue,
  instructions,
  blockingСonditions,
  setsTheSettingValue,
}: CounterPropsType) => {
  return (
    <div className="wrapper">
      {blockingСonditions ? (
        <div className="counter warning">Incorrect value!</div>
      ) : (
        <div
          className={instructions ? "counter instructions" : "counter"}
          style={count === maxCount ? { color: "red" } : {}}
        >
          {instructions ? "enter values and press 'set'" : count}
        </div>
      )}

      <div className="buttons">
        <Button disabled={count === maxCount || blockingСonditions} name="inc" onClick={inc} />
        <Button
          disabled={count === 0 || blockingСonditions}
          onClick={() => setCount(startValue)}
          name="reset"
        />
        <Button name="set" onClick={setsTheSettingValue} />
      </div>
    </div>
  );
};
