// const func = (callback) => {
//   setTimeout(() => {
//     const data = { message: "data come from servr" };
//     callback(data);
//   }, 2000);
// };
// const callBackFunc = (data) => {
//   console.log("called call back function", data.message);
// };

// func(callBackFunc);

// high order function
// high order function take a function as argument and return function that is called high order function

// sum of string

// let str = "asd324sadsfd3r4sdf23sdfds32h3h3";
// let num = 0;

// for (let i = 0; i <= str.length - 1; i++) {
//   if (str[i] >= 0 && str[i] <= 9) {
//     num += parseInt(str[i]);
//   }
// }

// find String

const findFirsLatter = (str) => {
  const result = str
    .split(" ")
    .map((item) => item[0])
    .join("")
    .toUpperCase();
  return result;
};

const str = "rehan ahmad makhdoompur";
const res = findFirsLatter(str);
console.log(res);
// let isFirstLetter = true;
// let firstLetters = "";

// for (let i = 0; i < str.length; i++) {
//   if (isFirstLetter && str[i] !== " ") {
//     firstLetters += str[i];
//     console.log(firstLetters);
//     isFirstLetter = false;
//   } else if (str[i] === " ") {
//     isFirstLetter = true;
//   }
// }

// console.log("First letters of each word:", firstLetters);
