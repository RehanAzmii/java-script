// remove hyphen from the string
function leaveSingleHyphen(inputString) {
  return inputString.replace(/-+/g, "-");
}

const input = "this---is----a--test-string";
const result = leaveSingleHyphen(input);
console.log(result); // Output: "this-is-a-test-string"

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
