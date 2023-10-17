//deep copy and shalow copy

// object copy by refrenc
// const obj = {
//   name: "peter",
// };
// let user = obj;
// user.name = "bruce";
// console.log(obj);

// shalow coppy
// shalow copy only copy the main object
// shalow copy work only single lavel object dont work with nested object
// after shalow copy compare only object value not memory location
// const obj = {
//   name: "peter",
// };
// let user = Object.assign({}, obj);
// let user = { ...obj };
// user.name = "bruce";
// console.log(obj);

// const obj = {
//   name: "peter",
// };
// let user = { ...obj };
// user.name = "bruce";
// console.log(obj);

// deep copy work with nexted object with help of JSON.stringify
// deep copy:- copy the nested object
// disadvantage of deep copy
// not work with function and date

const obj = {
  name: "peter",
  address: {
    city: "Noida",
    state: "UP",
  },
  // getData: function () {
  //   return "All data is here";
  // },
};
let user = JSON.parse(JSON.stringify(obj));

user.address.city = "Gurgaon";
console.log("obj", obj);
console.log("user", user);

// use loadsh
// const obj = {
//   name: "peter",
//   address: {
//     city: "Noida",
//     state: "UP",
//   },
//   getData: function () {
//     return "All data is here";
//   },
// };
// let user = _.cloneDeep(obj);
// user.address.city = "Gurgaon";
// console.log(obj);
// console.log(user);
