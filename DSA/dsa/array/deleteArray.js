// delete array element

// using pre define method
// let array = [1, 2, 3, 4, 5];

// array.splice(2, 1);
// console.log(array);

// delete array element using loop

let array = [1, 2, 3, 4, 5];
let arr = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] == 2) {
    continue;
  }
}
console.log(arr);
