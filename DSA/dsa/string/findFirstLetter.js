// first method

// const firstLtter = (str) => {
//   let result = str
//     .split(" ")
//     .map((item) => item[0])
//     .join("");
//   return result;
// };
// const string = "Rehan Ahmad Makhdoompur";
// const res = firstLtter(string);
// console.log(res);

// second method

// const firstLtter = (str) => {
//   let isFirstLatter = true;
//   let firstChar = "";
//   for (let i = 0; i < str.length; i++) {
//     if (isFirstLatter && firstChar !== " ") {
//       firstChar += str[i];
//       isFirstLatter = false;
//     } else if (str[i] === " ") {
//       isFirstLatter = true;
//     }
//   }
//   return firstChar;
// };

// const string = "Rehan Ahmad Makhdoompur";
// const res = firstLtter(string);
// console.log(res)

// const findFirstLater = (str) => {
//   let firstChar = "";
//   let isFirst = true;
//   for (let ch of str) {
//     if (isFirst & (firstChar !== " ")) {
//       firstChar += ch;
//       isFirst = false;
//     } else if (ch === " ") {
//       isFirst = true;
//     }
//   }
//   return firstChar;
// };
// let string = "rehan ahmad makh";
// let res = findFirstLater(string);
// console.log(res);

const findFirstLater = (str) => {};
let string = "Rehan ahmad makhdoompur";
let res = findFirstLater(string);
console.log(res);
