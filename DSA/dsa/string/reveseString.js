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

// const reverseString = (str) => {
//   let newString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   return newString;
// };

// let string = "rehan ahmad";
// let res = reverseString(string);
// console.log(res);

const str = "this is javascript code";
const reverseStr = str.split("").reverse().join("");
// .split(" ")
// .reverse()
// .join(" ");

console.log(reverseStr);

// const reverseString = (str) => {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   console.log(reversed.split(" ").reverse().join(" "));
// };
// reverseString("this is the javascript code"); // output =  siht si eht tpircsavaj edoc
