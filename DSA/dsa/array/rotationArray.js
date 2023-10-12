// const rotationArray = (arr) => {
//   const temp = arr[arr.length - 1];
//   for (let i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i - 1];
//   }
//   arr[0] = temp;
// };
// let array = [1, 2, 3, 4, 5];
// // let output = [5, 1, 2, 3, 4];
// rotationArray(array);
// console.log(array);

// using predefine method

let array = [1, 2, 3, 4, 5];

let temp = array.pop();
array.unshift(temp);
console.log(array);
