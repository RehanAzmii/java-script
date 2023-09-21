// debauncing
// Debouncing waits for a certain time before invoking the function again
// debauncing is not js inbuild function we can achive the debauncing
// with help of web api like this settimeout
//we can improve the browser performance using debauncing
let count = 0;
function getData() {
  console.log("fetching data...", count++);
}

function myDebounce(call, d) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      call();
    }, d);
  };
}
const beterFunction = myDebounce(getData, 1000);

// throtling:-

// Throttling limits the number of times the function can be called over a certain period
// Ensures that the function is called only once, even if the event is triggered multiple times.

const myThrotle = (func, d) => {
  return function (...arg) {
    document.getElementById("myid").disabled = true;
    setTimeout(() => {
      func();
    }, d);
  };
};

const newFunc = myThrotle(() => {
  document.getElementById("myid").disabled = false;
  console.log("function called....");
}, 5000);
