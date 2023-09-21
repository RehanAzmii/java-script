// var let and const diffrence
// var decleration is global scope or function scope and let and const are block scope
// they all are hoisted top of scope but var  vairiable is initialize with undefine
// but let and const is not initilize
// let and const  go to the temporal ded zone

{
  var a = 10;
}
console.log(a); // var is function scope  that reasion output is 10

// block scope
{
  let b = 10; // dont re asign let b = 13 becose already initilize
  b = 12;
  console.log(b);
}
// console.log(b); // let is block scope

{
  const b = 10;
  b = 12;
  console.log(b); // we can not difine same varaible in the same block becose of const
}
