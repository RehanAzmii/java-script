// flat nested array with predefine method
// using pre define method

// let array = [1, [2, [3, [4, [5]]]]];

// const res = array.flat(Infinity);
// console.log(res);

// using loop

// const flateArray = (arr) => {
//   let flattenArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       flattenArray = flattenArray.concat(flateArray(arr[i]));
//     } else {
//       flattenArray.push(arr[i]);
//     }
//   }
//   return flattenArray;
// };
// let array = [1, [2, [3, [4, [5]]]]];
// const res = flateArray(array);
// console.log(res);
// const flattenArray = (arr) => {
//   let flateArray = [];
//   for (let i of arr) {
//     if (Array.isArray(i)) {
//       flateArray = flateArray.concat(flattenArray(i));
//     } else {
//       flateArray.push(i);
//     }
//   }
//   return flateArray;
// };
// let array = [1, [2, [3, [4]]]];
// let res = flattenArray(array);
// console.log(res);

let array = [
  2,
  3,
  5,
  [{ name: "Jhon Doe" }, 2, 3, 1, [true, 1, 2, ["name", 1, 2]], 2, 4],
  1,
];

const flatArray = (arr) => {
  let flattenArray = [];
  let ar = [];
  for (let el of arr) {
    if (Array.isArray(el)) {
      flattenArray = flattenArray.concat(flatArray(el));
    } else {
      flattenArray.push(el);
    }
  }
  for (let el of newArr)
    if (typeof el === "number") {
      ar.push(el);
    }
  return ar;
};
let res = flatArray(array);
console.log(res);

// let res = array?.flat(Infinity)?.filter((value) => typeof value === "number");

// console.log(res);
