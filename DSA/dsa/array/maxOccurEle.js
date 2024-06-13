// max occuring element in js

// let array = [1, 2, 2, 2, 3, 4, 5, 6, 7];
let array = "rehanahmad";

function findMostFrequent(arr) {
  let counts = {};
  let maxCount = "";
  for (let num of arr) {
    counts[num] = (counts[num] || 0) + 1;
    if (maxCount == "" || counts[num] > counts[maxCount]) {
      maxCount = num;
    }
  }
  console.log(counts);
  return maxCount;
}

let result = findMostFrequent(array);
console.log("The most frequently occurring element is:", result);

// const maxStrOcurr = (str) => {
//   let strObj = {};
//   maxKey = "";
//   for (let key of str) {
//     if (!strObj[key]) {
//       strObj[key] = 0;
//     }
//     strObj[key]++;
//     if (maxKey == "" || strObj[key] > strObj[maxKey]) {
//       maxKey = key;
//     }
//   }
//   console.log(maxKey);
// };
// let array = [1, 2, 2, 2, 3, 4, 5, 6, 7];

// maxStrOcurr(array);

// const maxOccur = (str) => {
//   let count = {};
//   let maxCount = 0;
//   let mostFrequent;
//   for (let num of str) {
//     count[num] = (count[num] || 0) + 1;
//     if (count[num] > maxCount) {
//       maxCount = count[num];
//       mostFrequent = num;
//     }
//   }
//   return maxCount;
// };
// let result = maxOccur("rehanahmadmakhd");
// console.log(result);
