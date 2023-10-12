// what is the anagram
// same charector make the other word like cat= act it is anagram
// length is same

// const checkAnagram = (str1, str2) => {
//   // check occurences
//   let Objstr1 = {};
//   // first check the length
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   for (ch of str1) {
//
//     Objstr1[ch] = (Objstr1[ch] || 0) + 1;
//   }
//   for (ch of str2) {
//
//     if (!Objstr1[ch]) {
//       return false;
//     }
//     Objstr1[ch]--;
//   }
//   return true;
// };
// console.log(checkAnagram("hello", "olleh"));

// same charector make the other word like cat = act is anagram

const anagram = (str1, str2) => {
  let objStr = {};
  // first check the length
  if (str1.length !== str2.length) {
    return false;
  }
  // using for loop
  for (let ch of str1) {
    //maxOccuring
    objStr[ch] = (objStr[ch] || 0) + 1;
  }
  for (let ch of str2) {
    if (!objStr[ch]) {
      return false;
    }
    objStr[ch]--;
  }
  return true;
};
console.log(anagram("hello", "lleho"));
