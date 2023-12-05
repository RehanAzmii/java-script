// const removeNagativeEle = (arr) => {
//   let newArr = [];
//   for (let el of arr) {
//     if (el >= 0) {
//       newArr.push(el);
//     }
//   }
//   return newArr;
// };

// let array = [1, 2, -3, -4, 6, -7, 8];

// let res = removeNagativeEle(array);
// console.log(res);

// 1. Uncomment line #8 and fix the re-rendering error.
// 2. Restrict the counter from going below 0. Use the best UX approach in your opinion.
// 3. We require counter in multiple places within our application but with different UI. Make the counter logic reusable.

const removeNegative = (arr) => {
  let newArr = [];
  for (let el of arr) {
    if (el >= 0) {
      newArr.push(el);
    }
  }
  return newArr;
};

let array = [1, 2, 3, -4, -5, 6, -7];
let res = removeNegative(array);
console.log(res);
