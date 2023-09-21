// what is the anagram
// same charector make the other word like cat= act it is anagram
// length is same

const checkAnagram = (str1, str2) => {
  // check occurences
  let Objstr1 = {};
  // first check the length
  if (str1.length !== str2.length) {
    return false;
  }
  for (ch of str1) {
    // console.log(ch);
    Objstr1[ch] = (Objstr1[ch] || 0) + 1;
  }
  for (ch of str2) {
    // console.log(Objstr1[ch]);
    if (!Objstr1[ch]) {
      return false;
    }
    Objstr1[ch]--;
  }
  return true;
};
console.log(checkAnagram("act", "cat"));
