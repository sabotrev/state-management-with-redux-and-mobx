import { compose } from "redux";
console.log("%ccompose", "color: #7648bc; font-size: 16px");

const makeLouder = str => str.toUpperCase();
const repeateThreeTimes = str => str.repeat(3);
const embolden = str => str.bold();

const combineAllFunctions = compose(embolden, repeateThreeTimes, makeLouder);

console.log(combineAllFunctions("hi"));
