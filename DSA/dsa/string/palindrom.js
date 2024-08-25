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

// const isPalindrome = (str) => {
//   return str === str.split("").reverse().join("");
// };

// console.log(isPalindrome("12"));

// longest palidrome

function longestPalindrome(s) {
  if (s.length === 0) return "";

  let start = 0,
    end = 0;

  // Function to expand around the center
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    // return the length of the palindrome
    return right - left - 1;
  }

  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(i, i); // Odd length palindromes
    let len2 = expandAroundCenter(i, i + 1); // Even length palindromes
    let len = Math.max(len1, len2);

    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.slice(start, end + 1);
}

let str = "rehanhello level 123454321";
console.log(longestPalindrome(str));
