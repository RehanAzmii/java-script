// const stringFunc = (str) => {
//   let sum = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= 0 && str[i] <= 9) {
//       sum += parseInt(str[i]);
//     }
//   }
//   return sum;
// };

// const string = "gdghj122nxgh4756mxkj424";
// const res = stringFunc(string);
// console.log(res);

const findSumString = (str) => {
  let sum = 0;
  for (let el of str) {
    if (el >= "0" && el <= "9") {
      sum += parseInt(el);
    }
  }
  return sum;
};
let string = "rehan123hfnnf78kk34";
let res = findSumString(string);
console.log(res);
