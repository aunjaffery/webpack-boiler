import calc from "./calc";
import "./main.css";
console.log(calc(6));
console.log("this");

if (module.hot) {
  module.hot.accept();
}
