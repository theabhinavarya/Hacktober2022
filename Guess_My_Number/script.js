'use strict';

let num = Math.trunc(Math.random() * 20 + 1);
let highscore = 0;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when no guess is provided
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number❌';

    //when number is equal to guess
  } else if (guess === num) {
    document.querySelector('.message').textContent = 'Correct Number!🎉';

    document.querySelector('.number').textContent = num;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //when guess is less than number
  } else if (guess != num) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess < num ? 'Too Low!😛' : 'Too High!😛';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Try Again! you lost 😂';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  num = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
