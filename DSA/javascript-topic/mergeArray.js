console.log("hello world");

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9];
// let arr3 = [];

// for (let i = 0; i < arr1.length; i++) {
//   arr3[i] = arr1[i];
// }
// for (let i = 0; i < arr2.length; i++) {
//   arr3[arr1.length + i] = arr2[i];
// }
// console.log(arr3);

// sort Array

// let arraySort = [1, 3, 2, 4, 6, 7, 9, 12, 45, 67];

// for (let i = 0; i < arraySort.length; i++) {
//   for (let j = 0; j < arraySort.length; j++) {
//     if (arraySort[j] > arraySort[j + 1]) {
//       let temp = arraySort[j];
//       arraySort[j] = arraySort[j + 1];
//       arraySort[j + 1] = temp;
//     }
//   }
// }
// console.log(arraySort);

// remove hyphen in js

// const string = "Rehan--Ahamd";

// const removeHyphen = (str) => {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] != "-") {
//       newStr += str[i];
//     }
//   }
//   return newStr;
// };

// console.log(removeHyphen(string));

//  Function currying is a technique in which a function with multiple arguments
//  is transformed into a sequence of functions that each take a single argument

// const add = (x) => (y) => (z) => console.log(x + y + z);

// add(2)(3)(4);

// const arr = [2, 1, 4, 5, 2, 6];

// let res = Math.min(...arr);
// console.log(res);

// let newarr = Array.from(new Set(arr));
// console.log(newarr);

// const reverseString = (str) => {
//   let newarr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newarr += str[i];
//   }
//   return newarr;
// };
// console.log(reverseString("hello"));

// let str = "Rehan Ahamd Makh";

// const getFirstLatter = (str) => {
//   let res = str
//     .split(" ")
//     .map((item) => item[0])
//     .join("");
//   return res;
// };

// console.log(getFirstLatter(str));

// let counter = 0;

// function incrementCounter() {
//   counter++;
//   console.log(counter);
// }

// const intervalId = setInterval(incrementCounter, 100);

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 5000);

// remove hyphen

// function leaveOneHyphen(str) {
//   let result = "";
//   let previousChar = "";

//   for (let i = 0; i < str.length; i++) {
//     const currentChar = str[i];

//     if (currentChar === "-" && previousChar === "-") {
//       continue;
//     }

//     result += currentChar;
//     previousChar = currentChar;
//   }

//   return previousChar;
// }

// const originalString = "example---string--with-hyphens";
// const modifiedString = leaveOneHyphen(originalString);
// console.log(modifiedString);

// get second largest value from array
// function findSecondLargest(arr) {
//   const sortedArray = arr.sort((a, b) => b - a);
//   return sortedArray[2];
// }

// const numbers = [9, 4, 7, 1, 5, 10, 8];
// const secondLargest = findSecondLargest(numbers);
// console.log(secondLargest);

// function findSecondLargest(arr) {
//   let largest = arr[0];
//   let secondLargest = arr[1];

//   for (let i = 2; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] !== largest) {
//       secondLargest = arr[i];
//     }
//   }

//   return secondLargest;
// }

// const numbers = [9, 4, 7, 1, 5, 10, 8];
// const secondLargest = findSecondLargest(numbers);
// console.log(secondLargest);
console.log(typeof (1 - "2" + "2"));
console.log(1 - "2" + "2");
