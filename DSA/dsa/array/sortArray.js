// sort array with pre define mthod

// let arr = [1, 5, 6, 2, 4, 3];

// const res = arr.sort((a, b) => {
//   return a - b;
// });

// console.log(res);

// sort array with loop

let arr = [1, 0, 5, 3, 0, 4, 0, 2, 0, 6];
for (let i = 0; i <= arr.length - 1; i++) {
  for (let j = 0; j <= arr.length - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);
