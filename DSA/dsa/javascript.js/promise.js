// a promise is an object that return value
// which you hope to recive in the future but not now
// promise introduce in es6 for handle  asynchronous task in java script
// promise store in micro task queue
// promise have three stages resolve,pending $ reject

// produce promise
let promise = new Promise((resolve, reject) => {
  let data = 5;
  if (data < 4) {
    resolve("promise resolve");
  } else {
    resolve("promise is rejected");
  }
});
promise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// resolve two promise when we call api
// let url = "https://jsonplaceholder.typicode.com/users";
// let data = fetch(url);
// data
//   .then((item) => {
//     return item.json();
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// final key word
// if promise are resolve or reject final key word is run

// const promise = new Promise((resolve, reject) => {
//   reject("rehan");
// });
// promise.finally((item) => {
//   console.log("final", item);
// });

// promise.all
// we call three api at a time then use the promise.all
//  but if all api resolve then give output otherwise not get value
// promise.all take value as array
// let data = Promise.all([
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("2 second");
//     }, 2000);
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("1 second");
//     }, 1000);
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("4 second");
//     }, 4000);
//   }),
// ]);

// data
//   .then((item) => {
//     console.log(item);
//   })
//   .catch((err) => {
//     console.log("catch block", err);
//   });

// promise.allsettled give the value if two promise is resolve and other is reject after that give value
// which promise is resolve and whose is rejected

// let data = Promise.allSettled([
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("2 second");
//     }, 2000);
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("1 second");
//     }, 1000);
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("4 second");
//     }, 4000);
//   }),
// ]);

// data
//   .then((item) => {
//     console.log(item);
//   })
//   .catch((err) => {
//     console.log("catch block", err);
//   });

// promise.race;- promise.race give the value as soon as resolve the promise
// let data = Promise.race([
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("2 second");
//     }, 2000);
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("1 second");
//     }, 1000);
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("4 second");
//     }, 4000);
//   }),
// ]);

// data
//   .then((item) => {
//     console.log(item);
//   })
//   .catch((err) => {
//     console.log("catch block", err);
//   });

// let url1 = fetch("https://jsonplaceholder.typicode.com/users");
// let url2 = fetch("https://jsonplaceholder.typicode.com/users");
// let url3 = fetch("https://jsonplaceholder.typicode.com/users");

// let data = Promise.all([url1, url2, url3]);
// data
//   .then((item) => {
//     return Promise.all(item.map((r) => r.json()));
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async await
// async await introduce in es8 2017
//"async and await make promises easier to write"
//  async makes a function return a Promise.
//  await makes a function wait for a Promise

// diffrence
// syntax error = syntax is big
// using try and catch for error handling: then and catch
// chaining is easy compare promise: deficult
// it doest not have any sttate :three stage

// async function promise() {
//   let data = new Promise((realve, reject) => {
//     realve("rehan");
//   });
//   let res = await data;
//   console.log(res);
// }
// promise();

// time out and time clear and time interval
