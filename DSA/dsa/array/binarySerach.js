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

// linear search algorithm

// const user = [
//   { username: "rehan", email: "rehan@gmail.com" },
//   { username: "abc", email: "abc@gmail.com" },
//   { username: "xyz", email: "xyz@gmail.com" },
// ];

// const isUserExit = (array, val) => {
//   for (let item of array) {
//     if (item["username"] === val) {
//       return true;
//     }
//   }
//   return false;
// };
// const res = isUserExit(user, "abc");
// console.log(res);

// time complexity linear o(n)

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

// divide and conquerer technique
// find the index of given no in a sorted array 7
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] => index 6 -> output

// min = 0 , element =1
// max=array.length-1 = element =15
// minIndex = (min+max)/2 => (0+14) => 7(index), element =8
// if array[midIndex]< number(7)
// min = minIndex+1;
// array[minIndex]> number(7)
// max= minIndex-1 , min=0 ,max=6 {1,2,3,4,5,6,7}
// (min + max)/2 => 3
// index +1 = 4 (min), max = 6 {5,6,7}
// (min + max) /2 => 5 + 1 => 6(min), max = 6
// (min+ max)/2 => 6
// else minIndex => 6 , element = 7

// const searchAlgo = (array, number) => {
//   let min = 0;
//   let max = array.length - 1;
//   while (max >= min) {
//     let minIndex = Math.floor((min + max) / 2);
//     if (array[minIndex] === number) {
//       return minIndex;
//     } else if (array[minIndex] < number) {
//       min = minIndex + 1;
//     } else {
//       max = minIndex - 1;
//     }
//   }
//   return -1;
// };
// let result = searchAlgo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7);
// console.log(result);
