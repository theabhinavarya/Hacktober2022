const dateOfBirth = document.querySelector("#date-pf-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

checkNumberButton.addEventListener("click", function () {
  var dob = dateOfBirth.value;
  var validdob = dob.replaceAll("-", "");
  let dateSum = 0;
  for (let i = 0; i < validdob.length; i++) {
    dateSum = dateSum + Number(validdob.charAt(i));
  }
  if (dateSum % Number(luckyNumber.value) === 0) {
    outputBox.innerText = "YAY ! , Your birthday is lucky 🚀";
  } else {
    outputBox.innerText = "Your Birthday is not lucky 😢";
  }
});
