// what is hoisting in js
// hoisting is default behaviour of js moving the all decleration top of scope before code excution
// var and function decleration is hoist
// let and const is hoist but not initialise it moving temporal ded zone that reasion
// come error inside the console
// arrow function and function expression does not support hoisting in java script

// function hoist() {
//   console.log(a); // undefine
//   var a = 10;
//   console.log(a); // 10
// }
// hoist();

const hoist = () => {
  console.log(a); // undefine
  var a = 10;
  console.log(a); // 10
};
hoist();
