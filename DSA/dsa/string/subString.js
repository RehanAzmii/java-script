function findConsecutiveVowelSubstrings(input) {
  const vowels = ["a", "e", "i", "o", "u"];
  const result = [];

  for (let i = 0; i < input.length; i++) {
    if (vowels.includes(input[i])) {
      let consecutiveVowels = input[i];

      // Check for consecutive vowels
      for (let j = i + 1; j < input.length; j++) {
        if (vowels.includes(input[j])) {
          consecutiveVowels += input[j];
        } else {
          break;
        }
      }

      // If consecutive vowels found, add to result
      if (consecutiveVowels.length > 1) {
        result.push(consecutiveVowels);
        i += consecutiveVowels.length - 1; // Skip the consecutive vowels in the next iteration
      }
    }
  }

  return result;
}

// Test cases
console.log(findConsecutiveVowelSubstrings("heelleoa")); // ['ee', 'eoa']
console.log(findConsecutiveVowelSubstrings("airoplane")); // ['ai']
console.log(findConsecutiveVowelSubstrings("helleo")); // ['eo']
console.log(findConsecutiveVowelSubstrings("heelleo"));

// const subVovelString = (str) => {
//   const vowels = "aeiou";
//   let result = "";
//   for (let el of str) {
//     if (vowels.includes(el)) {
//       result += el;
//     }
//   }
//   //   return [result.substring(0, 2), result.substring(2)];
//   return [result.slice(0, 2), result.slice(2)];
// };
// const inputString = "heelleoa";

// let res = subVovelString(inputString);

// console.log(res) /// [ee,eoa]

// const subVovelString = (str) => {
//   const vowels = "aeiou";
//   let result = "";
//   for (let el of str) {
//     if (vowels.includes(el)) {
//       result += el;
//     }
//   }
//   //   return [result.substring(0, 2), result.substring(2)];
//   return [result.slice(0, 2)];
// };
// const inputString = "airoplane";

// let res = subVovelString(inputString);

// console.log(res); /// [ai]

// const subVovelString = (str) => {
//   const vowels = "aeiou";
//   let result = "";
//   for (let el of str) {
//     if (vowels.includes(el)) {
//       result += el;
//     }
//   }
//   //   return [result.substring(0, 2), result.substring(2)];
//   return [result.slice(1)];
// };
// const inputString = "helleo";

// let res = subVovelString(inputString);

// console.log(res); /// [eo]

// const subVovelString = (str) => {
//   const vowels = "aeiou";
//   let result = "";
//   for (let el of str) {
//     if (vowels.includes(el)) {
//       result += el;
//     }
//   }
//   //   return [result.substring(0, 2), result.substring(2)];
//   return [result.slice(0, 2), result.slice(2)];
// };
// const inputString = "heelleo";

// let res = subVovelString(inputString);

// console.log(res); /// [ee,eo]

// const lengthOfLongestSubstring = (s) => {
//   // sliding window

//   if (!s) {
//     return 0;
//   }
//   let end = 0;
//   let start = 0;
//   let maxLngth = 0;

//   const Uniquechar = new Set();
//   while (end < s.length) {
//     if (!Uniquechar.has(s[end])) {
//       Uniquechar.add(s[end]);
//       end++;
//       maxLngth = Math.max(maxLngth, Uniquechar.size);
//     } else {
//       Uniquechar.delete(s[start]);
//       start++;
//     }
//   }
//   return maxLngth;
// };
// let result = lengthOfLongestSubstring("bcabcbb");
// console.log(result);
