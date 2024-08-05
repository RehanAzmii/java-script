// closur
// inner function can be access outer function variable
//Variables in closures can help you maintain a state that you can use later
//They provide data encapsulation
// They help remove redundant code
// They help maintain modular code

// const func = () => {
//   let a = 0;
//   let innerFunc = () => {
//     a++;
//     console.log(a);
//   };
//   return innerFunc;
// };
// let res = func();
// res();

function a() {
  for (var i = 1; i <= 5; i++) {
    function sum(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    sum(i);
  }
  console.log("SetTimeOut Example");
}
a();
