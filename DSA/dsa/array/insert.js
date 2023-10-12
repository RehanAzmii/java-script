// insert element in array

// let data = [1, 4, 6, 8, 9];

// let position = 2;
// let newEl = 7;
// for (let i = data.length - 1; i >= 0; i--) {
//   if (i >= position) {
//     data[i + 1] = data[i];
//     if (i == position) {
//       data[i] = newEl;
//     }
//   }
// }
// console.log(data);

let array = [1, 2, 3, 4, 5];

array.splice(1, 1, 0);
console.log(array);
