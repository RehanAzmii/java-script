// sort array with pre define mthod

// let arr = [1, 5, 6, 2, 4, 3];

// const res = arr.sort((a, b) => {
//   return a - b;
// });

// console.log(res);

// sort array with loop

// let arr = [1, 0, 5, 3, 0, 4, 0, 2, 0, 6];
// for (let i = 0; i <= arr.length - 1; i++) {
//   for (let j = 0; j <= arr.length - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }
// console.log(arr);

// bubble sort (sorting...)
// a sorting algorithm were the largest values bubble up at the top

// const bubbleSort = (array) => {
//   for (let i = array.length; i > 0; i--) {
//     console.log(i);
//     let isswaped;
//     for (let j = 0; j < i; j++) {
//       if (array[j] > array[j + 1]) {
//         [array[j], array[j + 1]] = [array[j + 1], array[j]];
//         isswaped = true;
//       }
//     }
//     if (!isswaped) {
//       break;
//     }
//   }
//   return array;
// };
// const res = bubbleSort([5, 3, 4, 1, 2, 8, 6, 7]);
// console.log(res);

//selection sort
// we consider fist element is a minimum in slection sort algo
// [0,2,34,22,10,19]

// const selectionSort = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     let min = i;
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] < array[min]) {
//         min = j;
//       }
//     }
//     if (i !== min) {
//       temp = array[i];
//       array[i] = array[min];
//       array[min] = temp;
//     }
//   }
//   return array;
// };
// const result = selectionSort([0, 2, 34, 22, 10, 19]);
// console.log(result);

// insertion sort
// arr=[8,2,4,1,3]
// steps
//1 consider 2nd element ,arr[1]  start from here
// 2

const sort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

let res = sort([1, 3, 6, 9, 34, 22, 44]);
console.log(res);
