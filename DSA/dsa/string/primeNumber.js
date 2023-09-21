//prime number
//A prime number is a positive integer that is only divided by 1 and itself .
//for example 2,3,5,11 are first few prime numbers

var number = prompt("please enter a number");
if (number == 1) {
  console.log(`${number} is neither prime nor composite number`);
} else if (number < 1) {
  console.log(`${number} is not a prime number`);
} else {
  for (var i = 2; i < number; i++) {
    if (number % i == 0) {
      var res = `${number} is not a prime number`;
      break;
    } else {
      var res = `${number} is  a prime number`;
    }
  }
  console.log(res);
}
