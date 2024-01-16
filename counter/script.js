const cou = document.getElementById("count");
const inc = document.getElementById("increase");
const res = document.getElementById("reset");
const dec = document.getElementById("decrease");

let increment = 0;

inc.addEventListener("click", () => {
  increment++;
  cou.textContent = increment;
});

res.addEventListener("click", () => {
  increment = 0;
  cou.textContent = increment;
});

dec.addEventListener("click", () => {
  if (increment > 0) {
    increment--;
    cou.textContent = increment;
  }
});
