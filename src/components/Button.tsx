type ButtonPropsType = {
  name: string;
  onClick: () => void;
  disabled?: boolean;
};

export const Button = ({ onClick, disabled, name }: ButtonPropsType) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {name}
    </button>
  );
};

{
  /* <button
          onClick={setStartValueInCount}
          disabled={startValue < 0 || maxValue < 0 || startValue === maxValue}
        >
          set
        </button> */
}
