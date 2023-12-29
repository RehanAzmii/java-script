// checking sum zero - Problem 1
// [-5,-4,-3,-2,0,2,4,6,8] -> input
// [-4,4] --> output

// const getSumPaiZero = (arr) => {
//   for (let number of arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (number + arr[i] === 0) {
//         return [number, arr[i]];
//       }
//     }
//   }
// };
// let array = [-5, -4, -3, -2, 0, 2, 4, 6, 8];
// let result = getSumPaiZero(array);
// console.log(result);

// time complexity o(n^2) quadratic

const findSumPair = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (right > left) {
    sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};
let array = [-5, -4, -3, -2, 0, 2, 4, 6, 8];
let result = findSumPair(array);
console.log(result);

// o(n) linear complexity
