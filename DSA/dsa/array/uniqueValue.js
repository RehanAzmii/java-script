// get unique value from the array
// using pre defined method

// const array = [1, 2, 2, 3, 4, 4, 5, 6, 6];

// const unique = new Set(array);
// const uniqueValue = Array.from(unique);
// console.log(uniqueValue);

const array = [1, 2, 2, 3, 4, 4, 5, 6, 6];
let uniqueValue = [];
for (let i = 0; i < array.length; i++) {
  if (!uniqueValue.includes(array[i])) {
    uniqueValue.push(array[i]);
  }
}
console.log(uniqueValue);
