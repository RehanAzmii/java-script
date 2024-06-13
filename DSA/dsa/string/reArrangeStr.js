function rearrangeString(input) {
  const letters = [];
  const digits = [];

  // Separate letters and digits
  for (let i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
      letters.push(input[i]);
    } else {
      digits.push(input[i]);
    }
  }

  // Sort the letters array
  letters.sort();

  let result = "";
  let letterIndex = 0;
  let digitIndex = 0;

  // Merge the arrays alternately
  for (let i = 0; i < input.length; i++) {
    if (!isNaN(input[i])) {
      result += digits[digitIndex++];
    } else {
      result += letters[letterIndex++];
    }
  }

  return result;
}

// Test the function
const input = "a3B2b";
const output = rearrangeString(input);
console.log("Input:", input);
console.log("Output:", output); // Output: "aB2b3"

// const rearrangeString = (input) => {
//   let letters = [];
//   let digits = [];
//   // seprate letter and digit
//   for (let i = 0; i < input.length; i++) {
//     if (isNaN(input[i])) {
//       letters.push(input[i]);
//     } else {
//       digits.push(input[i]);
//     }
//   }
//   // sort the letters array
//   letters.sort();
//   // console.log(letters);
//   let result = "";
//   let letterIndex = 0;
//   let digitIndex = 0;
//   // merge the array alternately
//   for (let i = 0; i < input.length; i++) {
//     if (!isNaN(input[i])) {
//       result += digits[digitIndex++];
//     } else {
//       result += letters[letterIndex++];
//     }
//   }
//   return result;
// };
// let input = "a3B2b";
// let output = rearrangeString(input);
// console.log("input", input);
// console.log("ouput", output); //a7GbB5
