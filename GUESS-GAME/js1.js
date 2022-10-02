"use strict";
// document.querySelector('.message')

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(secretNumber);
function displayMessage(text) {
  document.querySelector(".message").textContent = text;
}

let guess = 0;
document.querySelector(".check").addEventListener("click", function () {
  guess = Number(document.querySelector(".guess").value);


  if (!guess) displayMessage("no number");
  else if (guess === secretNumber) {
    displayMessage("correct number");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60a347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      Document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    }
     else 
    {
      
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#ffb3b3";
  document.querySelector(".number").style.width = "15rem";
});
