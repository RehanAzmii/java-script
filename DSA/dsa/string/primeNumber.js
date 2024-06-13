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
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
};
let checkNumber = 17;
if (isPrime(checkNumber)) {
  console.log(`${checkNumber} is a prime number`);
} else {
  console.log(`${checkNumber} is not a prime number`);
}
