const removeNagativeEle = (arr) => {
  let newArr = [];
  for (let el of arr) {
    if (el >= 0) {
      newArr.push(el);
    }
  }
  return newArr;
};

let array = [1, 2, -3, -4, 6, -7, 8];

let res = removeNagativeEle(array);
console.log(res);
