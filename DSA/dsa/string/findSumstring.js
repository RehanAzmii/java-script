const stringFunc = (str) => {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 0 && str[i] <= 9) {
      sum += parseInt(str[i]);
    }
  }
  return sum;
};

const string = "gdghj122nxgh4756mxkj424";
const res = stringFunc(string);
console.log(res);
