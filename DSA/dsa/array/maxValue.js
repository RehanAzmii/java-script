// find the max value from the array

// let arr = [1, 3, 5, 7, 9, 4, 16];

// const res = Math.max(...arr);
// const resmin = Math.min(...arr);
// console.log(resmin);

// max value with loop

// const maxValueFunc = (arr) => {
//   let maxValue = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < maxValue) {
//       maxValue = arr[i];
//     }
//   }
//   return maxValue;
// };
// let array = [2, 3, 5, 7, 9, 4, 16];
// const res = maxValueFunc(array);
// console.log(res);

function findMinValue(arr) {
  let minValue = arr[0]; // Assume first element is the min

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i]; // Update min value if a smaller element is found
    }
  }

  return minValue;
}

const array = [3, 8, 2, 10, 5];
const min = findMinValue(array);
console.log("The minimum value is:", min); // Output: The minimum value is:
