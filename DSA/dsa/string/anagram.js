// what is the anagram
// same charector make the other word like cat= act it is anagram
// length is same
// number of later is same but arragement is difrence is called anagram
// same charector make the other word like cat = act is anagram

const anagram = (str1, str2) => {
  let objStr = {};
  // first check the length
  if (str1.length !== str2.length) {
    return false;
  }
  // using for loop
  for (let ch of str1) {
    //maxOccuring
    objStr[ch] = (objStr[ch] || 0) + 1;
  }
  for (let ch of str2) {
    if (!objStr[ch]) {
      return false;
    }
    objStr[ch]--;
  }
  return true;
};
console.log(anagram("hello", "lllho"));

// o(n) linear time complexity
