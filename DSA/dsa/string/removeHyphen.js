// remove hyphen from the string
// function leaveSingleHyphen(inputString) {
//   return inputString.replace(/-+/g, "-");
// }

// const input = "this---is----a--test-string";
// const result = leaveSingleHyphen(input);
// console.log(result); // Output: "this-is-a-test-string"

// remove hyphen with loop
// const removeHyphen = (str) => {
//   let result = "";
//   let prevChar = ""; // keep tarck of the previous charector
//   for (let i = 0; i < str.length; i++) {
//     let currentChar = str[i];
//     if (currentChar === "-" && prevChar == "-") {
//       continue; // skip consecutive hyphen
//     }

//     result += currentChar;
//     prevChar = currentChar;
//   }
//   return result;
// };

// const string = "rehan--- ahmad--- makhdoompur";

// const res = removeHyphen(string);
// console.log(res);

// const removeHyphen = (str) => {
//   return str.replace(/-+/g, "-");
// };
// let string = "rehan----ahmad---makhdoompur";
// let res = removeHyphen(string);
// console.log(res);

// const removeHyphen = (str) => {
//   let result = "";
//   let previousCha = "";
//   for (let ch of str) {
//     if ((ch === "-") & (previousCha === "-")) {
//       continue;
//     }
//     result += ch;
//     previousCha = ch;
//   }
//   return result;
// };
// let string = "rehan----ahmad---makhdoompur";
// let res = removeHyphen(string);
// console.log(res);
// let myString = "this--is-a-string-with-hyphens";
// let myArray = myString.split("");

// myArray.forEach(function (element, index) {
//   if (element === "-") {
//     myArray[index] = " ";
//   }
// });

// let newString = myArray.join("");
// console.log(newString); // "this_is_a_string_with_hyphens"

let url = "https://jsonplaceholder.typicode.com/users";

const getData = async () => {
  let res = await fetch(url);
  res = await res.json(res);
  console.log(res);
};

getData();
