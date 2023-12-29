// set ,Map, WeakSet ,WeakMap

// set
// set is object
// Set is a collection of unique values
// Each value can only occur once in a Set
// A Set can hold any value of any data type
// let myArray = [1, 2, 3, 4];
// let obj = new Set(myArray);
// obj.add(5);
// obj.delete(5);
// for (let new1 of obj) {
//   console.log(new1);
// }
// console.log(obj);

// var obj1 = { name: "rehan" };
// obj.add(obj1);
// console.log(obj);
// obj.clear();
// console.log(obj);
// console.log(obj.has(1));

// weakset
// we can store object not itrate

// let ws = new WeakSet();
// var ob1 = { name: "tiger" };
// var ob2 = {};
// ws.add(ob1);
// ws.add(ob2);

// console.log(ws);

// Map
//A Map holds key-value pairs where the keys can be any datatype
// no duplicasy allowed
// over hide the first key and updated value set on the key
// we can itrate with loop

// let myMap = new Map([
//   ["a1", "ajay"],
//   ["a2", "vikas"],
// ]);
// myMap.set("a2", "ajay");
// for (let [key, value] of myMap) {
//   console.log(`keys ${key} , value ${value}`);
// }

// WeakMap
// we can store object
// it cant be iterate
let wm = new WeakMap();
var ob3 = { name: "tiger" };
var ob4 = {};
wm.set(ob3, "private");
wm.set(ob4, "private data");

console.log(wm);
