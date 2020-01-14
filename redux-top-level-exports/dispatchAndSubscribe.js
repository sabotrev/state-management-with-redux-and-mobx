import { createStore } from "redux";
console.log("%c\ndispatch & subscribe", "color: #7648bc; font-size: 16px");

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

const unsubscribe = store.subscribe(() => {
  console.log(`here ${store.getState().value}`);
});

const first = store.getState();
store.dispatch({ type: "ADD", payload: { amount: 2 }, meta: {} });
store.dispatch({ type: "ADD", payload: { amount: 2 }, meta: {} });
store.dispatch({ type: "ADD", payload: { amount: 2 }, meta: {} });
const second = store.getState();

console.log(
  `first: ${JSON.stringify(first)}\nsecond: ${JSON.stringify(second)}`
);
