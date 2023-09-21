const string = "rehan ahmad";
const res = string.split(" ").map((item) => item);
console.log(res);

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

// "stric mode";

// let obj = {
//   name: "rehan",
// };
// const res = () => {
//   console.log(this.name);
// };

// res(obj);
