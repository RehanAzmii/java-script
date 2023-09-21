// sort string alphabatically

const sortStringAlphaBatic = (str) => {
  // change string in array
  let array = str.split("");
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array.join("");
};

let string = "rehan ahmad";

const res = sortStringAlphaBatic(string);
console.log(res);

const mergeTwoArray = (obj1, obj2) => {
  let newObj = {};
  for (let key in obj1) {
    if (obj1[key]) {
      newObj[key] = obj1[key];
    }
  }
  for (let key in obj2) {
    if (obj2[key]) {
      newObj[key] = obj2[key];
    }
  }
  return newObj;
};
let object1 = { a: 1, b: 2 };
let object2 = { c: 3, d: 4 };
let responce = mergeTwoArray(object1, object2);
console.log(responce);
