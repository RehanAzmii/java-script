// what is the palindrome
// any string when we see the backword side or farwordside look like same that is called palindrome

// const palindrome = (data) => {
//   let start = 0;
//   let end = data.length - 1;
//   let result = true;
//   while (end > start) {
//     if (data[start] !== data[end]) {
//       result = false;
//     }
//     start++;
//     end--;
//   }
//   return result;
// };
// let str = "121";
// console.log(palindrome(str));

// const palindrome = (str) => {
//   let start = 0;
//   let end = str.length - 1;
//   while (end > start) {
//     if (str[end] !== str[start]) {
//       return false;
//     }
//     end--;
//     start++;
//   }
//   return true;
// };
// let string = "1212";
// let res = palindrome(string);
// console.log(res);

const isPalindrome = (str) => {
  return str === str.split("").reverse().join("");
};

console.log(isPalindrome("12"));
