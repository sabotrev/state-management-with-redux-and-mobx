import { combineReducers, bindActionCreators, createStore } from "redux";
console.log("%c\nbindActionCreators", "color: #7648bc; font-size: 16px");

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

const addAction = {
  type: "ADD",
  payload: {
    amount: 4
  }
};

const createAddAction = amount => {
  return {
    type: "ADD",
    payload: {
      amount
    }
  };
};

const store = createStore(calculatorReducer);

const dispatchAdd = bindActionCreators(createAddAction, store.dispatch);

console.log(`store.getState(): ${JSON.stringify(store.getState())}`);
dispatchAdd(3);
console.log(`dispatchAdd(3)`);
console.log(`store.getState(): ${JSON.stringify(store.getState())}`);
