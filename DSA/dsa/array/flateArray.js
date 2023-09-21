// flat nested array with predefine method
// using pre define method

// let array = [1, [2, [3, [4, [5]]]]];

// const res = array.flat(Infinity);
// console.log(res);

// using loop

const flateArray = (arr) => {
  let flattenArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      //   flattenArray = flattenArray.concat(flateArray(arr[i]));
    } else {
      flattenArray.push(arr[i]);
    }
  }
  return flattenArray;
};
let array = [1, [2, [3, [4, [5]]]]];
const res = flateArray(array);
console.log(res);
