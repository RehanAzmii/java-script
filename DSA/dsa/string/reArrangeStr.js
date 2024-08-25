// function rearrangeString(input) {
//   const letters = [];
//   const digits = [];

//   // Separate letters and digits
//   for (let i = 0; i < input.length; i++) {
//     if (isNaN(input[i])) {
//       letters.push(input[i]);
//     } else {
//       digits.push(input[i]);
//     }
//   }

//   // Sort the letters array
//   letters.sort();

//   let result = "";
//   let letterIndex = 0;
//   let digitIndex = 0;

//   // Merge the arrays alternately
//   for (let i = 0; i < input.length; i++) {
//     if (!isNaN(input[i])) {
//       result += digits[digitIndex++];
//     } else {
//       result += letters[letterIndex++];
//     }
//   }

//   return result;
// }

// // Test the function
// const input = "a3B2b";
// const output = rearrangeString(input);
// console.log("Input:", input);
// console.log("Output:", output); // Output: "aB2b3"

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

let input = 3;
const myFunc=(input)=>{

  for (let i = 1; i <= input; i++) {
    let pattern = "";
    for (let j = 1; j <= input; j++) {
      if (j <= i) {
        pattern += "*";
      } else {
        pattern += "#";
      }
    }
    console.log(pattern);
  }
}

myFunc(input)

// let input = 5;
// let result = [];

// for (let i = 1; i <= input; i++) {
//   result.push(2 + (i - 1) * 6);
// }

// console.log(result.join(' '));

// // reorder the string and array
// function reorderArray(inputArray) {
//   // Desired order
//   let desiredOrder = [15, 13, 11, 12, 14];

//   // Reorder the array based on the desired order
//   let reorderedArray = desiredOrder.map(number => inputArray.find(item => item === number));

//   return reorderedArray;
// }

// let inputArray = [11, 13, 12, 15, 14]; // Input array
// let outputArray = reorderArray(inputArray);
// console.log(outputArray.join(" "));
