let count = 0;
let update = document.querySelector(".data");
document.querySelector(".inc").addEventListener("click", () => {
  count++;
  update.innerHTML = count;
});
document.querySelector(".dec").addEventListener("click", () => {
  count--;
  update.innerHTML = count;
});
