const reverseArray = (arr) => {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  console.log(newArr);
};

let array = [1, 2, 3, 4, 5, 6];
reverseArray(array);
