// what is the generator function
// which function whose excution pose and resume that called genrator function
// genrator function use yield
// give the output to specific point

// function* generatorFunction() {
//   console.log("generator function called");
//   let a = 100;
//   yield "first Step";
//   yield a;
//   yield 40;
// }
// let sg = generatorFunction();
// console.log(sg.next().value);
// console.log(sg.next());
// console.log(sg.next());
// console.log(sg.next());

// example for real time
// function* simplGen() {
//   let i = 100;
//   while (true) {
//     i++;
//     yield i;
//   }
// }
// let sg = simplGen();

// function getNewId() {
//   document.getElementById("newId").innerText = sg.next().value;
// }

//2 diffrence between arrow function and normal function
//1 syntax difrence
// 2 this keyword behaviour 	Inherits from a broader scope.
// 3 arrow function is not hoist

// imidiate invoke  function expression (iife)

//An IIFE (Immediately Invoked Function Expression) is a JavaScript function
// that runs as soon as it is defined

// use case of iife

// Avoid polluting the global namespace
// To create closures

// regular function

// function greet() {
//   console.log("function is called");
// }
// greet();

// IIFE

// (function () {
//   console.log("iife is called");
// })();

function myFunc() {
  console.log("Welcome to");
  // This will be executed after executing the previous log.
  console.log("Hi There!");
  (function () {
    console.log("GeeksForGeeks!");
  })();
}

// Calling the Function.
myFunc();

// function currying
// curring in js transfer function with multiple arguments in to nested sreies of function
//  each take a single argument

// let sum = (a) => (b) => (c) => () => console.log(a + b + c);
// sum(1)(2)(3)();

// const sum = (num1) => {
//   return (num2) => {
//     if (num2 === undefined) {
//       return num1;
//     } else {
//       return sum(num1 + num2);
//     }
//   };
// };
// const res = sum(1)(2)(3)(4)(6)();
// console.log(res);

const Sum = (...args) => {
  let accumalateSum = (...innerArgs) => {
    if (innerArgs.length === 0) {
      return accumalateSum.total;
    }
    for (const arg of innerArgs) {
      accumalateSum.total += arg;
    }
    return accumalateSum;
  };
  accumalateSum.total = 0;
  for (const arg of args) {
    accumalateSum.total += arg;
  }
  return accumalateSum;
};

console.log(Sum(2, 3, 4, 5, 6)());
console.log(Sum(2)(3)(4)(5)(6)());

// high order function
// high order function are function that take an other function as argument
// and return a function as thier result its called high order function

// let array = [1, 2, 3, 4, 5];
// let res = array.map((items) => {
//   return items * 2;
// });
// console.log(res);
