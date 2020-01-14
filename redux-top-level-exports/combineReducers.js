import { combineReducers } from "redux";
console.log("%c\ncombineReducers", "color: #7648bc; font-size: 16px");

const calculatorReducer = (state = { value: 1 }, action) => {
  if (action.type === "ADD") {
    const value = state.value;
    const amount = action.payload.amount;

    return {
      value: value + amount
    };
  }

  return state;
};

const reducer = combineReducers({ calculator: calculatorReducer });
console.log(reducer);
