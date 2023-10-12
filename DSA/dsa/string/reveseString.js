// reverse string

// const reverseString = (str) => {
//   let newString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   console.log(newString);
// };
// let string = "rehan";
// reverseString(string);

const reverseString = (str) => {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
};

let string = "rehan ahmad";
let res = reverseString(string);
console.log(res);
