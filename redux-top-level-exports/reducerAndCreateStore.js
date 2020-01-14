import { createStore } from "redux";
console.log("%c\nreducer & createStore", "color: #7648bc; font-size: 16px");

const reducer = (state = { value: 1 }, action) => {
  console.log(`action -> ${JSON.stringify(action)}`);

  if (action.type === "ADD") {
    const value = state.value;
    const amount = action.payload.amount;

    return {
      value: value + amount
    };
  }

  return state;
};

const store = createStore(reducer);

console.log(`store.getState(): ${store.getState()}`);
