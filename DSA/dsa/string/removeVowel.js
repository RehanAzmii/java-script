// remove vowel
const removeVowel = (str) => {
  let vowel = "aeiouAEIOU";
  let newString = "";
  for (let el of str) {
    if (!vowel.includes(el)) {
      newString += el;
    }
  }
  return newString;
};

const string = "Rehan ahmad";
const res = removeVowel(string);
console.log(res);
// const removeVowel = (str) => {
//   let newString = "";
//   let vowel = "aeiouAEIOU";
//   for (let ch of str) {
//     if (!vowel.includes(ch)) {
//       newString += ch;
//     }
//   }
//   return newString;
// };
// input = [1,0,5,3,0,4,0,2,0,6]
// output = [0,0,0,0,1,5,3,4,2,6]
// let string = "rehan ahmad";
// let res = removeVowel(string);
// console.log(res);

// Q1. Write a function that accepts a string as a parameter and converts the first letter of each word
//  of string in uppercase.

// const myfunc = (str) => {
//   return str
//     .split("")
//     .map((item, index) => (index === 0 ? item.toUpperCase() : item))
//     .join("");
// };

// let result = myfunc("rehan ahmad makhdoompur");
// console.log(result);

// Q2. Create a function that removes duplicate characters from a string and returns the result.

// const removeDuplicate = (str) => {
//   let duplicate = "";
//   for (let el of str) {
//     if (!duplicate.includes(el)) {
//       duplicate += el;
//     }
//   }
//   return duplicate;
// };

// let res = removeDuplicate("rehanahmad");

// console.log(res);

// Write a function to add all the numbers in an array.

// const add = (arr) => {
//   let sum = 0;
//   for (let el of arr) {
//     sum += el;
//   }
//   return sum;
// };
// let res = add([1, 2, 3, 4, 5, 6]);

// console.log(res);

// Q4. In an array of numbers and strings, only add those members which are not strings.

// const addNum = (arr) => {
//   let sum = 0;
//   for (let el of arr) {
//     if (typeof el === "number") {
//       sum += el;
//     }
//   }
//   console.log(sum);
// };
// addNum([1, 2, 3, "rehan", 5, "t", "y", 6, { name: "rehan" }]);
