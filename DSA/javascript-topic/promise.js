// promise used for async opreation in js fetch data from server make api
// promise have three stage
//1 pending
//2 resolve
//3 reject

// const promise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNum = Math.random();
//       if (randomNum > 0.5) {
//         resolve(`success Random Number is :${randomNum}`);
//       } else {
//         reject(`reject Random Number is :${randomNum}`);
//       }
//     }, 1000);
//   });
// };

// // use promise
// promise()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// call aplly bind method in js
// when we atached the object to the function then use call apply and bind method

let myString = "this--is-a-string-with-hyphens";
let myArray = myString.split("");

myArray.forEach(function (element, index) {
  if (element === "-") {
    myArray[index] = " ";
  }
});

let newString = myArray.join("");
console.log(newString); // "this_is_a_string_with_hyphens"
