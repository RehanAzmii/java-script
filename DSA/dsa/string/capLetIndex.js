// find capital letter index in js

// const capitalLetterIndex = (str) => {
//   let capIndex = [];
//   for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
//     if (str[i] >= "A" && str[i] <= "Z") {
//       capIndex.push(i);
//     }
//   }
//   return capIndex;
// };

// let string = "RehanAhmadMakhdoomPur";
// const res = capitalLetterIndex(string);
// console.log(res);

// const capitalIndex = (str) => {
//   let capitalindex = "";
//   for (let i of str) {
//     if ((i >= "A") & (i <= "Z")) {
//       capitalindex += i;
//     }
//   }
//   return capitalindex;
// };
// let string = "RehanAhmadMakhdoomPur";
// let res = capitalIndex(string);
// console.log(res);

const myFunc = (str) => {
  let newIndex = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      newIndex.push(i);
    }
  }
  console.log(newIndex);
};

let string = "RehanAhamd Makhdoompur";
myFunc(string);
