// delete array element

// using pre define method
// let array = [1, 2, 3, 4, 5];

// array.splice(2, 1);
// console.log(array);

// delete array element using loop

// let array = [1, 2, 3, 4, 5];
// let arr = [];

// for (let i = 0; i < array.length; i++) {
//   if (i !== 2) {
//     arr.push(array[i]);
//   }
// }
// console.log(arr);

const deleteArray = (arr) => {
  let newEle = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 3) {
      continue;
    } else {
      newEle.push(arr[i]);
    }
  }
  return newEle;
};
let array = [1, 3, 6, 9, 0];
let res = deleteArray(array);
console.log(res);
