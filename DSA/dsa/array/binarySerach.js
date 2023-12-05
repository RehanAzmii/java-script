// linear search
// search index position

// const linearSearch = (arr, target) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i;
//     }
//   }
// };
// let array = [1, 2, 3, 4, 5, 6, 7];
// let position = 3;

// const res = linearSearch(array, position);
// console.log(res);

// binary search
// only sorted value we can apply binary serach

// const binarySearch = (arr, target) => {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
// };
// const sortedArray = [2, 3, 5, 8, 10];
// const targetValue = 8;
// let res = binarySearch(sortedArray, targetValue);
// console.log(res);

// fist of all array is sort then use binary search
