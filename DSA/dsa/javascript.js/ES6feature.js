// rest parameter
// spread opreater
// destructuring
// let and const
// arrow function
// promise
// class
// template literal
// turnary opreator

// const func = (...arg) => {
//   let arr = "string";
//   return Array.isArray(arr);
// };
// let res = func(1, 2, 3, 4, 5, 6);
// console.log(res);

const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);
console.log(newArr);
