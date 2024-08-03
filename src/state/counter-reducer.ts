export type CounterStateTypes = {
  startValue: number;
  maxValue: number;
  count: number;
  instructions: boolean;
};

type CounterIncrementActionType = {
  type: "INCREMENT-COUNT";
};

type ResetCountActionType = {
  type: "RESET-COUNT";
};

type CounterSetting = {
  type: "COUNTER-SETTING";
};

type SetCounterActionType = {
  type: "SET-COUNTER-VALUE";
  payload: { startValue: number; maxValue: number };
};

const initialState: CounterStateTypes = {
  startValue: 0,
  maxValue: 5,
  count: 0,
  instructions: false,
};

export type ActionsType =
  | CounterIncrementActionType
  | ResetCountActionType
  | CounterSetting
  | SetCounterActionType;

export const counterReducer = (state = initialState, action: ActionsType): CounterStateTypes => {
  switch (action.type) {
    case "INCREMENT-COUNT": {
      return { ...state, count: state.count + 1 };
    }
    case "RESET-COUNT": {
      return {
        ...state,
        count: state.startValue,
      };
    }
    case "COUNTER-SETTING": {
      return {
        ...state,
        instructions: true,
      };
    }
    case "SET-COUNTER-VALUE": {
      return {
        ...state,
        startValue: action.payload.startValue,
        maxValue: action.payload.maxValue,
        count: action.payload.startValue,
        instructions: false,
      };
    }
    default:
      return state;
  }
};

export const incrementCountAC = (): CounterIncrementActionType => {
  return {
    type: "INCREMENT-COUNT",
  } as const;
};

export const resetCountAC = (): ResetCountActionType => {
  return {
    type: "RESET-COUNT",
  } as const;
};

export const counterSettingAC = (): CounterSetting => {
  return {
    type: "COUNTER-SETTING",
  } as const;
};

export const setCounterValueAC = (startValue: number, maxValue: number): SetCounterActionType => {
  return {
    type: "SET-COUNTER-VALUE",
    payload: { startValue, maxValue },
  } as const;
};
