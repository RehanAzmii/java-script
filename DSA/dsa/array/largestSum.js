// [1,2,3,4,3,5,4,6,7,8] => total elements --10
// count largest sum of consecutive digits
// sum => 4
// sum =>25

//conditions
// num > array -> error message
// 10 - 4 + 1 => 7

// const findLargest = (array, num) => {
//   if (num > array) {
//     throw new Error("num is not greater than array");
//   } else {
//     let max = 0;
//     for (let i = 0; i < array.length - num + 1; i++) {
//       let temp = 0;
//       for (let j = 0; j < num; j++) {
//         temp += array[i + j];
//       }
//       if (temp > max) {
//         max = temp;
//       }
//     }
//     return max;
//   }
// };
// const result = findLargest([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
// console.log(result);

const findLargest = (arr, num) => {
  let maxSum = 0;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > maxSum) {
      maxSum = temp;
    }
  }
  console.log(maxSum);
};
findLargest([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
