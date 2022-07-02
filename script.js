'use strict';

// Declare Global Variables
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const scoreTxt = document.querySelector('.score');
const guess = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const header = document.querySelector('header');
const again = document.querySelector('.again');
const highScoreTxt = document.querySelector('.highscore');

// Generate random number
function randomNo() {
  const max = 20;
  return Math.trunc(Math.random() * max + 1);
}

// Assign generated random number
let randomNumber = randomNo();
console.log(randomNumber);

// Initialize score variable
let score = 20;

// Initialize highScore variable
let highScore = 0;

// Perform Action
checkBtn.addEventListener('click', getGuessedValue);

function displayMessage(info) {
  return (message.textContent = info);
}

// Event Firing
function getGuessedValue() {
  const guessValue = Number(guess.value);

  // Error handler for no value;
  if (!guessValue) displayMessage('⛔ No number!');
  // When player wins
  else if (guessValue === randomNumber) {
    displayMessage('🎉 Correct Number');
    number.textContent = randomNumber;
    header.style.backgroundColor = 'rgb(0, 255, 0)';
    number.style.width = '30rem';

    if (highScore < score) {
      highScore = score;
      highScoreTxt.textContent = highScore;
    } else {
      highScore = score;
      highScoreTxt.textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(guessValue < randomNumber ? '📈 Too low' : '📉 Too high')
        
      score--;
      scoreTxt.textContent = score;
    } else {
      displayMessage('💥 You lost the game') = 
      scoreTxt.textContent = 0;
    }
  }
}

// Reset the game
again.addEventListener('click', resetGame);

function resetGame() {
  guess.value = '';
  score = 20;
  randomNumber = randomNo();
  scoreTxt.textContent = score;
  header.style.backgroundColor = 'rgb(255, 0, 0)';
  displayMessage('Start guessing...');
  number.style.width = '15rem';
  number.textContent = '?';
  console.log(randomNumber);
}
