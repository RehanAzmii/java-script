// checking squire in an other array
// ar1=[1,2,3,4] , ar2=[1,9,4,16]
// if(ar1[i]* ar1[i]=== ar2[j])
// let isSquare =true

// const isSquareCheck = (arr1, arr2) => {
//   for (let i = 0; i < arr1.length; i++) {
//     let isSquare = false;
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] * arr1[i] === arr2[j]) {
//         isSquare = true;
//       }
//       if (j === arr2.length - 1) {
//         if (!isSquare) {
//           return false;
//         }
//       }
//     }
//   }
//   return true;
// };
// let result = isSquareCheck([1, 2, 3, 4], [1, 9, 4, 25]);
// console.log(result);

// time complexity is o(n^2)

// checking squire in an other array
// ar1=[1,2,3,4] , ar2=[1,9,4,16] -- case 1
// ar1=[1,2,4,2] , ar2=[1,4,4,16] -- case 2

// map1={1:1,2:2,4:1}
// map2={1:1,4:2,16:1}

// const checkingSquire = (ar1, ar2) => {
//   let map1 = {};
//   let map2 = {};
//   for (let item of ar1) {
//     map1[item] = (map1[item] || 0) + 1;
//   }
//   for (let item2 of ar2) {
//     map2[item2] = (map2[item2] || 0) + 1;
//   }

//   for (let key in map1) {
//     if (!map2[key * key]) {
//       // object keys compaire in term of square
//       return false;
//     }
//     if (map1[key] !== map2[key * key]) {
//       // value compaireS
//       return false;
//     }
//   }
//   return true;
// };
// let res = checkingSquire([1, 2, 4, 2], [1, 4, 4, 16]);
// console.log(res);

let checkSquire = (arr1, arr2) => {
  let map1 = {};
  let map2 = {};
  // check max occur
  for (let item of arr1) {
    map1[item] = map1[item] || 0 + 1;
  }
  for (let item2 of arr2) {
    map2[item2] = map2[item2] || 0 + 1;
  }
  for (let key in map1) {
    // key compaire
    if (!map2[key * key]) {
      return false;
    }
    if (map1[key] !== map2[key * key]) {
      // value compaire
      return false;
    }
  }
  return true;
};

let result = checkSquire([1, 2, 3, 4], [1, 9, 4, 16]);
console.log(result);
