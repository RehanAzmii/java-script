// closur
// inner function can be access outer function variable

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
