// get unique value from the array
// using pre defined method

// const array = [1, 2, 2, 3, 4, 4, 5, 6, 6];

// const unique = new Set(array);
// const uniqueValue = Array.from(unique);
// console.log(uniqueValue);

// const array = [1, 2, 2, 3, 4, 4, 5, 6, 6];
// let uniqueValue = [];
// for (let i = 0; i < array.length; i++) {
//   if (!uniqueValue.includes(array[i])) {
//     uniqueValue.push(array[i]);
//   }
// }
// console.log(uniqueValue);

// find duplicate value in the array
// const array = [1, 2, 2, 3, 4, 4, 5, 6, 6];
// const duplicates = [];

// for (let i = 0; i < array.length; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[i] === array[j] && !duplicates.includes(array[i])) {
//       duplicates.push(array[i]);
//     }
//   }
// }

// console.log("Duplicate elements in the array:", duplicates);

function firstRepeatingElement(arr) {
  // Nested loop to check for repeating elements
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // If a repeating element is found, return its index
      if (arr[i] === arr[j]) {
        return i;
      }
    }
  }
  // If no repeating element is found, return -1
  return -1;
}

// Driver code
const arr = [10, 5, 3, 4, 3, 5, 6];
// Finding the index of first repeating element
const index = firstRepeatingElement(arr);
console.log(index);
