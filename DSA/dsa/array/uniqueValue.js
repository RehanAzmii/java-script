// get unique value from the array
// using pre defined method

// const array = [1, 2, 2, 3, 4, 4, 5, 6, 6];

// const unique = new Set(array);
// const uniqueValue = Array.from(unique);
// console.log(uniqueValue);

const array = [1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8];
let uniqueValue = [];
for (let i = 0; i < array.length; i++) {
  if (!uniqueValue.includes(array[i])) {
    uniqueValue.push(array[i]);
  }
}
console.log(uniqueValue.length);

// count unique number
//[1,2,3,4,5,6,7,8,6,7,8,8]

// output -->8
//condition
// i=0,j=0
// array[i]!==array[j]
// 1. i++
// 2. array[i]=array[j]

// const countUnique = (array) => {
//   if (array.length > 0) {
//     let i = 0;
//     for (let j = 1; j < array.length; j++) {
//       if (array[i] !== array[j]) {
//         i++;
//         array[i] = array[j];
//       }
//     }
//     return i + 1;
//   }
// };
// let result = countUnique([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]);
// console.log(result);
