// call apply bind
// The call, bind and apply methods can be used to set the this keyword independent of how a function is called
// bind:- The bind method creates a copy of the function and sets the this keyword,
// call & apply :-while the call and apply methods sets the this keyword and calls the function immediately.

let userDetails = {
  name: "Rehan ahmad",
  age: 25,
};
function printDetails(country, city) {
  console.log(this.name + " " + country + " " + city);
}
let userDetails1 = {
  name: "Farhan ahmad",
  age: 25,
};

// printDetails.call(userDetails1, "india", "noida");
// printDetails.call(userDetails, "india", "lucknow");
printDetails.apply(userDetails, ["india", "lucknow"]);

// let res = printDetails.bind(userDetails1, "india", "noida");
// res();
