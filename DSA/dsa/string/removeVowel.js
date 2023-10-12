// remove vowel
// const removeVowel = (str) => {
//   let vowel = "aeiouAEIOU";
//   let newString = "";
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (!vowel.includes(char)) {
//       newString += char;
//     }
//   }
//   return newString;
// };

// const string = "Rehan ahmad";
// const res = removeVowel(string);
// console.log(res);
// const removeVowel = (str) => {
//   let newString = "";
//   let vowel = "aeiouAEIOU";
//   for (let ch of str) {
//     if (!vowel.includes(ch)) {
//       newString += ch;
//     }
//   }
//   return newString;
// };
// input = [1,0,5,3,0,4,0,2,0,6]
// output = [0,0,0,0,1,5,3,4,2,6]
// let string = "rehan ahmad";
// let res = removeVowel(string);
// console.log(res);

(async () => {
  const a = { name: "A" }; // Use 'let' to allow reassignment
  const changeName = (obj) => (obj.name = "B");

  console.log(a);
  changeName(a);
  console.log(a);

  a.name = await Promise.resolve("B")
    .then((_) => "C")
    .then((_) => "D");

  console.log(a);

  setTimeout(() => {
    a = 45; // Reassign 'a' using 'let'
    console.log(a);
  }, 0);
})().catch(() => console.log("ERROR"));
