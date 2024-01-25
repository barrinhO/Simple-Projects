const input = document.querySelector("#range");
const btn = document.querySelector("#button");
const password = document.querySelector("#password");
const copyPassword = document.querySelector("#copy");
const valorSpan = document.querySelector("#valor");

let charset =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789@!#$";

function generatePassword() {
  const passwordLength = input.value;
  let generatedPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    generatedPassword += charset[randomIndex];
  }
  return generatedPassword;
}

btn.addEventListener("click", function () {
  const newPassword = generatePassword();
  password.textContent = newPassword;
});

password.addEventListener("click", function () {
  copyToClipboard(password.textContent);
  password.textContent = "";
});

function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

input.addEventListener("input", function () {
  valorSpan.textContent = input.value;
});
