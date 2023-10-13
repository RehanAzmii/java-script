//Prototype are the mechanism by which js object inhrit features from one another
// function Student() {
//   this.name = "John";
//   this.gender = "M";
// }

// Student.prototype.age = 15;
// Student.prototype.city = "gurgaon";

// var studObj1 = new Student();
// console.log(studObj1.city); // 15

// var studObj2 = new Student();
// console.log(studObj2.age); // 15

function Student() {
  this.name = "rehan";
}
Student.prototype.last = "ahmad";
Student.prototype.age = 30;
Student.prototype.city = "lucknow";

let object1 = new Student();
let object2 = new Student();
console.log(object1.name);
console.log(object2.city);
