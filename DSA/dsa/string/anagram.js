// what is the anagram
// same charector make the other word like cat= act it is anagram
// length is same
// number of later is same but arragement is difrence is called anagram
// same charector make the other word like cat = act is anagram

// const anagram = (str1, str2) => {
//   let objStr = {};
//   // first check the length
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   // using for loop
//   for (let ch of str1) {
//     //maxOccuring
//     objStr[ch] = (objStr[ch] || 0) + 1;
//   }
//   for (let ch of str2) {
//     if (!objStr[ch]) {
//       return false;
//     }
//     objStr[ch]--;
//   }
//   return true;
// };
// console.log(anagram("hello", "lllho"));

// o(n) linear time complexity

// const anagram = (str1, str2) => {
//   newObj = {};
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   // check max ocuring
//   for (let el of str1) {
//     newObj[el] = (newObj[el] || 0) + 1;
//   }
//   for (let el of str2) {
//     if (!newObj[el]) {
//       return false;
//     }
//     newObj[el]--;
//   }
//   return true;
// };
// let result = anagram("hello", "ellho");
// console.log(result);

const isAnnagram = (str1, str2) => {
  str1 = str1.trim();
  str2 = str2.trim();
  if (str1.length !== str2.length) {
    return false;
  }
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");
  return str1 === str2;
};
console.log(isAnnagram("hello  ", "lleho"));
