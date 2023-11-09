// const myFunc = (arr) => {
//   let newArr = [];
//   let zeroCount = 0;
//   for (let el of arr) {
//     if (el === 0) {
//       zeroCount++;
//     } else {
//       newArr.push(el);
//     }
//   }
//   // push zero of bigining of Array
//   for (let i = 0; i < zeroCount; i++) {
//     newArr.unshift(0);
//   }
//   console.log(newArr);
//   console.log(zeroCount);
// };
// let input = [1, 0, 5, 3, 0, 4, 0, 2, 0, 6];
// myFunc(input);

// const myFunc = (arr) => {
//   let newEl = [];
//   let zeroCount = 0;
//   for (let el of arr) {
//     if (el === 0) {
//       zeroCount++;
//     } else {
//       newEl.push(el);
//     }
//   }
//   console.log(zeroCount);
//   for (let i = 0; i < zeroCount; i++) {
//     newEl.unshift(0);
//   }
//   return newEl;
// };
// let input = [1, 0, 5, 3, 0, 4, 0, 2, 0, 6];
// // outpu = [0,0,0,0,1,5,3,4,2,6]
// let res = myFunc(input);
// console.log(res);

var originalString = "hello";
var stringWithStars = originalString.split("").join("*");
console.log(stringWithStars); // "h*e*l*l*o"

var originalString = "hello";
var stringWithStars = "";

for (var i = 0; i < originalString.length; i++) {
  stringWithStars += originalString[i];
  if (i < originalString.length - 1) {
    stringWithStars += "*";
  }
}

console.log(stringWithStars); // "h*e*l*l*o"
