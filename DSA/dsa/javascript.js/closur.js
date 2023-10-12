// closur
// inner function can be access outer function variable
//Variables in closures can help you maintain a state that you can use later
//They provide data encapsulation
// They help remove redundant code
// They help maintain modular code

const func = () => {
  let a = 10;
  let innerFunc = () => {
    console.log(a);
    a++;
  };
  return innerFunc;
};
const res = func();
res();
res();
