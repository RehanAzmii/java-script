// max occuring string

// const maxStrOcurr = (str) => {
//   let strObj = {};
//   maxKey = "";
//   for (let key of str) {
//     // console.log(key);
//     if (!strObj[key]) {
//       strObj[key] = 0;
//     }
//     strObj[key]++;
//     if (maxKey == "" || strObj[key] > strObj[maxKey]) {
//       maxKey = key;
//     }
//   }
//   console.log(maxKey);
// };
// let string = "hello rehane";

// maxStrOcurr(string);

const maxStrOcurr = (str) => {
  let maxObj = {};
  let maxKey = "";
  for (let el of str) {
    if (!maxObj[el]) {
      maxObj[el] = 0;
    }
    maxObj[el]++;
    if (maxKey === "" || maxObj[el] > maxObj[maxKey]) {
      maxKey = el;
    }
  }
  console.log(maxKey);
};
let string = "rehan ahmadddd";

maxStrOcurr(string);
