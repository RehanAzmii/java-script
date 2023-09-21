console.log("hello");

// use flat mthod in array

// const arr1 = [0, 1, 2, [3, 4]];
// const res = arr1.flat(Infinity);
// console.log(res);

// const array = [1, 2, 3, 4, [5, 6, [7, [8]]]];

// const flatten = (arr) => {
//   const result = arr.reduce((acc, item) => {
//     if (Array.isArray(item)) {
//       const flattendSubArray = flatten(item);
//       acc = acc.concat(flattendSubArray);
//     } else {
//       acc.push(item);
//     }
//     return acc;
//   }, []);
//   return result;
// };

// console.log(flatten(array));

// two array murge

// const array1 = [1, 2, 3, 4, 5, 6];
// const array2 = [4, 5, 6, 7];

// let data3 = [...array1, ...array2];

// for (let i = 0; i < array1.length; i++) {
//   data3[i] = array1[i];
// }

// for (let j = 0; j < array2.length; j++) {
//   data3[array1.length + j] = array2[j];

// }

// console.log(data3);

// const data = [1, 3, 2, 4, 6, 7, 9, 12, 45, 67];

// for (let i = 0; i < data.length; i++) {
//   // console.log(data[i]);
// }

// for (let j = 0; j < data.length; j++) {
//   if (data[j] > data[j + 1]) {
//     let temp = data[j];
//     data[j] = data[j + 1];
//     data[j + 1] = temp;
//   }
// }
// console.log(data);

// let a = [1, [2, [3, [4, [5, [6]]]]]];

// const flatten = (arr) => {
//   let result = arr.reduce((acc, item) => {
//     if (Array.isArray(item)) {
//       let flattendSubArray = flatten(item);
//       acc = acc.concat(flattendSubArray);
//     } else {
//       acc.push(item);
//     }
//     return acc;
//   }, []);
//   return result;
// };
// const rs = flatten(a);
// console.log(rs);

// console return value inside the promose
// async function getData() {
//   return await axios.get("https://jsonplaceholder.typicode.com/posts");
// }

// (async () => {
//   console.log(await getData());
// })();

let arr = [1, 4, 2, 6, 8, 8, 90, 67, 2];
let res = arr.sort((a, b) => {
  return a - b;
});
// let result = Array.from(new Set(res));
// console.log(result);
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
// let result = Array.from(new Set(arr));
// console.log(result);

// first way to find max value in array

// Math.max.apply(null, priceArr);

// second way to find max value in array

// let maxPrice = priceArr.reduce(
//   (initialVal, curVal) => Math.max(initialVal, curVal),
//   0
// );

//third way to find max value

// let maxPrice = Math.max(...priceArr);

// let array = [1, 2, 3, 4, 5];

// let maxValue = array.reduce((acc, item) => {
//   return Math.min(acc, item);
// });
// console.log(maxValue);

// let maxValue = Math.max(...array);

// console.log(maxValue);

// let myString = "this-is-a-string-with-hyphens";
// let myArray = myString.split("");

// myArray.forEach(function (element, index) {
//   if (element === "-") {
//     myArray[index] = " ";
//   }
// });

// let newString = myArray.join("");
// console.log(newString); // "this_is_a_string_with_hyphens"

// flated Array with for loop

const nestedArray = [1, 2, [3, 4, [5, 6], 7], 8];
// const res = nestedArray.flat(Infinity);
// console.log(res);
// const removeNested = (arr) => {
//   let newflateArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       newflateArray = newflateArray.concat(removeNested(arr[i]));
//     } else {
//       newflateArray.push(arr[i]);
//     }
//   }
//   return newflateArray;
// };
// console.log(removeNested(nestedArray));

const removeNested = (arr) => {
  let flattenArray = [];
  arr.map((element) => {
    if (Array.isArray(element)) {
      flattenArray = flattenArray.concat(removeNested(element));
    } else {
      flattenArray.push(element);
    }
  });
  return flattenArray;
};
console.log(removeNested(nestedArray));
