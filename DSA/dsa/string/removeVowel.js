// remove vowel
const removeVowel = (str) => {
  let vowel = "aeiouAEIOU";
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!vowel.includes(char)) {
      newString += char;
    }
  }
  return newString;
};

const string = "Rehan ahmad";
const res = removeVowel(string);
console.log(res);
