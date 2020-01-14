import {
  combineReducers,
  bindActionCreators,
  applyMiddleware,
  createStore
} from "redux";
console.log("%c\napplyMiddleware", "color: #7648bc; font-size: 16px");

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

const logger = ({ getState }) => {
  return next => action => {
    console.log(
      `Middleware logger-> getState(): ${JSON.stringify(
        getState()
      )}, action: ${JSON.stringify(action)}`
    );
    const value = next(action);
    return value;
  };
};

const store = createStore(calculatorReducer, applyMiddleware(logger));

store.dispatch({
  type: "ADD",
  payload: {
    amount: 5
  }
});
