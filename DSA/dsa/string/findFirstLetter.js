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

const findFirstLater = (str) => {
  let first = "";
  let isFirst = true;
  for (let el of str) {
    if (isFirst && first !== " ") {
      first += el;
      isFirst = false;
    } else if (el === " ") {
      isFirst = true;
    }
  }
  return first;
};

let string = "Rehan ahmad makhdoompur";
let res = findFirstLater(string);
console.log(res);

// string first later is capital
function capitalizeWords(input) {
  let words = input.toLowerCase().split(" "); // Split the string into words
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1); // Capitalize first letter
  }
  return words.join(" "); // Join the words back into a string
}

let input = "rehan ahmad makhdoompur";
let output = capitalizeWords(input);
console.log(output); // Output: Rehan Ahmad Makhdoompur

// convert first latter in uppercase
// const myfunc = (str) => {
//   return str
//     .split("")
//     .map((item, index) => (index === 0 ? item.toUpperCase() : item))
//     .join("");
// };

// let result = myfunc("rehan ahmad makhdoompur");
// console.log(result);
