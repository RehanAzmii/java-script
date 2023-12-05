// const outerFunction = () => {
//   const outerVairiable = "outer variable";
//   const innerFunc = () => {
//     console.log(outerVairiable);
//   };
//   return innerFunc;
// };
// const res = outerFunction();
// res();

// // high order function

const callBackFunc = () => {
  console.log("this is a call back functio");
};
const highorederFunction = (func) => {
  func();
  console.log("this is a high order function");
};

highorederFunction(callBackFunc);
console.log(2);
// // function currying

// const sum = (a) => (b) => (c) => (d) => console.log(a + (b % c) + d);

// sum(1)(2)(3)(4);

// function ahsan (){

// }

// export  let sana = function(){

// }
// sana()

// let rehan = () =>{

// }
