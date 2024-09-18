//prime number
//A prime number is a positive integer that is only divided by 1 and itself .
//for example 2,3,5,11 are first few prime numbers

// function isPrime(number) {
//   // Check for factors up to the square root of the number
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return false; // Number is divisible by i, not a prime number
//     }
//   }

//   return true; // Number is prime
// }

// // Example usage
// const checkNumber = 16; // Change this number to check for primality
// let result = isPrime(checkNumber);
// console.log(result);

const isPrime = (number) => {
  let result = true;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return (result = false);
    }
    break;
  }
  return result;
};

console.log(isPrime(17));
console.log(isPrime(18));

// factorial count

const getFactorial = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
};

let result = getFactorial(5);
console.log(result);
