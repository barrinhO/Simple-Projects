const button_1 = document.querySelector("[btt-1]");
const button_2 = document.querySelector("[btt-2]");
const button_3 = document.querySelector("[btt-3]");

button_1.addEventListener("click", function () {
  document.body.style.backgroundColor = "purple";
  button_1.classList.add("active");
  button_2.classList.remove("active");
  button_3.classList.remove("active");
});

button_2.addEventListener("click", function () {
  document.body.style.backgroundColor = "yellow";
  button_1.classList.remove("active");
  button_2.classList.add("active");
  button_3.classList.remove("active");
});

button_3.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
  button_1.classList.remove("active");
  button_2.classList.remove("active");
  button_3.classList.add("active");
});
