const maxStrOcurr = (str) => {
  let strObj = {};
  maxKey = "";
  for (let key of str) {
    if (!strObj[key]) {
      strObj[key] = 0;
    }
    strObj[key]++;
    if (maxKey == "" || strObj[key] > strObj[maxKey]) {
      maxKey = key;
    }
  }
  console.log(maxKey);
};
let array = [1, 2, 2, 2, 3, 4, 5, 6, 7];

maxStrOcurr(array);
