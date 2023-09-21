// what is the palindrome
// any string when we see the backword side or farwordside look like same that is called palindrome

const palindrome = (data) => {
  let start = 0;
  let end = data.length - 1;
  let result = true;
  while (end > start) {
    if (data[start] !== data[end]) {
      result = false;
    }
    start++;
    end--;
  }
  return result;
};
let str = "121";
console.log(palindrome(str));
