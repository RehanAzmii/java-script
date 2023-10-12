const myFunc = (arr) => {
  let newArr = [];
  let zeroCount = 0;
  for (let el of arr) {
    if (el === 0) {
      zeroCount++;
    } else {
      newArr.push(el);
    }
  }
  // push zero of bigining of Array
  for (let i = 0; i < zeroCount; i++) {
    newArr.unshift(0);
  }
  console.log(newArr);
  console.log(zeroCount);
};
let input = [1, 0, 5, 3, 0, 4, 0, 2, 0, 6];
myFunc(input);
