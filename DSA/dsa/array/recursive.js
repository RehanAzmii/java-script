// Recursion : when function called it self
// otherwise it will get called for infinite time
// if a function called itself then there must be an end point

// basic recursion

// let count = 1;
// const demo = (num) => {
//   // function with difinition
//   if (count > num) {
//     return;
//   }
//   console.log("rehan", count);
//   count++;
//   demo(num); // recursion function
// };
// demo(10);

// advance recursive function

// sorting using recursive function
// [2,3,1,4]  -> by default case
// [2,1,3,4] -> case 1
//[1,2,3,4] -> case 2

// let myArray = [2, 3, 1, 4];
// let newList = [];
// let i = 0;
// let j = 1;

// const isSorted = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > array[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// };

// const sortCheck = (array) => {
//   if (isSorted(array)) {
//     newList = array;
//     return array;
//   } else if (array[i] < array[j]) {
//     i++;
//     j++;
//     sortCheck(array);
//   } else {
//     [array[i], array[j]] = [array[j], array[i]];
//     i = 0;
//     j = 1;
//     sortCheck(array);
//   }
// };
// sortCheck(myArray);
// console.log(newList);

// helper Recursion function

// [1,2,3,4,5,6,7,8,9,10]
// [1,3,5,7,9] -> output
// number%2!==0

// const findOdd = (array) => {
//   let result = [];
//   function helperRecursive(inputArray) {
//     if (inputArray.length === 0) {
//       return;
//     } else if (inputArray[0] % 2 !== 0) {
//       result.push(inputArray[0]);
//     }
//     helperRecursive(inputArray.slice(1)); // recursive call
//   }
//   helperRecursive(array); // first time calling
//   return result;
// };
// let result = findOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(result);

function sum(...args) {
  // Inner function to handle currying
  const innerSum = (...innerArgs) => {
    if (innerArgs.length === 0) {
      // Base case: return the sum when no arguments are passed
      return args.reduce((acc, num) => acc + num, 0);
    } else {
      // Add new arguments to the existing arguments and return the curried function
      args = args.concat(innerArgs);
      return innerSum;
    }
  };

  return innerSum;
}

// Examples:
console.log(sum(1, 2, 3, 4, 5, 5, 6)()); // Output: 26
console.log(sum(1)(2)(3)(4)(5, 5)(6)()); // Output: 26
