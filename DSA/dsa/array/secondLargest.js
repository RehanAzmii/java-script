// const secondLargestNumber = (data) => {
//   first = data[0];
//   second = data[0];
//   for (var i = 0; i < data.length; i++) {
//     if (first < data[i]) {
//       second = first;
//       first = data[i];
//     } else if (second < data[i]) {
//       second = data[i];
//     }
//   }
//   return second;
// };

// let arr = [1, 20, 5, 6, 7, 25, 9, 30];
// let result = secondLargestNumber(arr);
// console.log(result);

const thirdLargestNumber = (data) => {
  //   if (data.length < 3) {
  //     return "Array should have at least 3 numbers";
  //   }
  let first = data[0];
  let second = data[0];
  let third = data[0];
  for (let i = 0; i < data.length; i++) {
    if (data[i] > first) {
      third = second;
      second = first;
      first = data[i];
    } else if (data[i] > second) {
      third = second;
      second = data[i];
    } else if (data[i] < third) {
      third = data[i];
    }
  }
  console.log(third);
};

let arr = [1, 20, 5, 6, 7, 25, 9, 30];
thirdLargestNumber(arr);
