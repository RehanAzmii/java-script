// map() transfer every element in an array and create new array
// filter() remove element that are not required and created new array
// reduce()convert all array element in to single value

// map()
// let array = [1, 2, 3, 4, 5];
// let res = array.map((items) => items);

// console.log(res);

//filter()

// let array = [2, 3, 4, 5, 6, 8];
// let res = array.filter((items) => items % 2 == 0);
// console.log(res);

// reduce()

// let array = [1, 2, 3, 4, 5];
// let res = array.reduce((acc, cur) => acc + cur);
// console.log(res);

let array = [1, 2, , 3, 4, 5];

let res = array.reduce((acc, cur) => {
  return acc + cur;
});
console.log(res);
