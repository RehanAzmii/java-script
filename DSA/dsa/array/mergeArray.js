console.log("hello world");
// predefine method use merge two array

// let array1 = [1, 2, 3, 4, 5];

// let array2 = [6, 7, 8, 9];

// const array3 = [...array1, ...array2];

// console.log(array3);

// merge two array with loop
// let array1 = [1, 2, 3, 4, 5];
// let array2 = [6, 7, 8, 9];
// let array3 = [];

// for (let i = 0; i <= array1.length - 1; i++) {
//   array3[i] = array1[i];
// }

// for (let i = 0; i < array2.length; i++) {
//   array3[array1.length + i] = array2[i];
// }

// console.log(array3);

let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];
let array3 = [];

for (let el of array1) {
  array3[el] = el;
}
console.log(array3);
