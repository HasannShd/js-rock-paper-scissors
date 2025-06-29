/*-------------------------------- Constants --------------------------------*/
const choices = ['rock', 'paper', 'scissors'];
/*-------------------------------- Variables --------------------------------*/
let msg;
let playerChoice;
let computerChoice;
/*------------------------ Cached Element References ------------------------*/
const rockBtnEl = document.querySelector('#rock');
const paperBtnEl = document.querySelector('#paper');
const scissorsBtnEl = document.querySelector('#scissors');
const resultDisplayEl = document.querySelector('#result-display');
const reset = document.querySelector('#reset');

// console.log(rockBtnEl)
/*-------------------------------- Functions --------------------------------*/
function getComputerChoice() {
  // Generate a random index based on the choices array length
  const randomIndex = Math.floor(Math.random() * choices.length);
  console.log('Random Index:', randomIndex);
  // Select the item from the array
  return choices[randomIndex];
}
// Initialize the game state
function play() {
  console.log('computer Choice (before):', computerChoice);
  computerChoice = getComputerChoice();
  console.log('computer Choice (after):', computerChoice);
  // Compare and then render result
  compare();
  render();
}
// Update our UI/html directly
function render() {
  resultDisplayEl.textContent = `Computer chose ${computerChoice} and you chose ${playerChoice}. ${msg}`;
}
function compare() {
  if (playerChoice === computerChoice) {
    msg = "It's a tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    msg = 'You win!';
  } else {
    msg = 'You lose!';
  }
  console.log(msg);
}

function resetGame(){
    resultDisplayEl.textContent ='Make a choice';
    playerChoice = '';
    computerChoice = '';
    msg = '';
}
/*----------------------------- Event Listeners -----------------------------*/
rockBtnEl.addEventListener('click', function () {
  playerChoice = 'rock';
  console.log('Player Choice:', playerChoice);
  play();
});
paperBtnEl.addEventListener('click', function () {
  playerChoice = 'paper';
  console.log('Player Choice:', playerChoice);
  play();
});
scissorsBtnEl.addEventListener('click', function () {
  playerChoice = 'scissors';
  console.log('Player Choice:', playerChoice);
  play();
});        
reset.addEventListener('click',function (){
    resetGame();
})









