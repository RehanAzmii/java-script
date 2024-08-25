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

// const binarySearch = (arr, target) => {
//   let left = 0;
//   let right = arr.length - 1;
//   while (right > left) {
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
// let array = [1, 2, 3, 4, 5, 6, 7, 8];
// let target = 6;
// let res = binarySearch(array, target);
// console.log(res);
// linear search algorithm

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

const user = [
  { name: "rehan", age: 22 },
  { name: "ahsan", age: 20 },
  { name: "noman", age: 25 },
];

// Assume the first person is the oldest initially
let oldestMan = user[0];

// Iterate over the array starting from the second element
for (let i = 1; i < user.length; i++) {
  if (user[i].age > oldestMan.age) {
    oldestMan = user[i];
  }
}

console.log("Oldest man:", oldestMan);

const myFunc = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  // console.log(left)
  while (right >= left) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

let array = [1, 2, 3, 4, 5, 6, 7, 8];
let target = 5;
let result = myFunc(array, target);
console.log(result);
