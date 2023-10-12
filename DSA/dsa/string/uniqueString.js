//find unique string

// const findUniqueString = (str) => {
//   let newString = "";
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (!newString.includes(char)) {
//       newString += char;
//     }
//   }
//   console.log(newString);
// };

// let string = "appleerehhhttgg";
// findUniqueString(string);

// const findUniqueString = (str) => {
//   let newString = "";
//   for (let ch of str) {
//     if (!newString.includes(ch)) {
//       newString += ch;
//     }
//   }
//   return newString;
// };
// let string = "reehaan ahmmad";
// let res = findUniqueString(string);
// console.log(res);

const findUniqueElement = (arr) => {
  let uniqueEle = [];
  for (let el of arr) {
    if (!uniqueEle.includes(el)) {
      uniqueEle.push(el);
    }
  }
  return uniqueEle;
};

let array = [1, 2, 3, 4, 5, 3, 6, 5];
let res = findUniqueElement(array);
console.log(res);
