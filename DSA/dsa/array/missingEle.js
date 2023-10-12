const missingEle = (arr) => {
  let n = arr.length + 1;
  for (let i = 1; i <= n; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
  return null;
};
let arr = [1, 3, 7, 5, 6, 2];
let res = missingEle(arr);
console.log("missing element is :", res);
