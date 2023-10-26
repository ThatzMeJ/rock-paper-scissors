let playerTotalPoints = 0;
let computerTotalPoints = 0;

const playerSelection = document.querySelectorAll(".choice");
const playerScore = document.querySelector('#player_score');
const computerScore = document.querySelector('#computer_score');
const scoreBoardContainer = document.querySelector('#score-board');
const playerChoiceContainer = document.querySelector('.player__choice');

playerScore.textContent = `${playerTotalPoints}`;
computerScore.textContent = `${computerTotalPoints}`;

const round = document.querySelector('.round');


playerSelection.forEach(button => {
  button.addEventListener('click', function() {
    const myValue = button.getAttribute('data-option');
    const computerValue = getComputerChoice();
    const result = playRound(myValue, computerValue);
    winnerOfRound(result);
  });
});

function getComputerChoice() {
  const computerChoice = Math.random();

  if (computerChoice < 0.33) {
    return "Rock";
  } else if ( computerChoice > 0.33 || computerChoice < 0.66){
    return "Scissors";
  } else {
    return "Paper"
  }
}


function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return round.textContent ="It's a tie!";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return  round.textContent = "You Lose! Paper beats Rock.";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return  round.textContent = "You win! Rock beats Scissors.";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return round.textContent =  "You win! Paper beats Rock.";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return round.textContent =  "You lose! Scissors beats Paper.";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return round.textContent = "You win! Scissors beats Paper.";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return round.textContent = "You lose! Rock beats Scissors.";
  }
}

const mainContainer = document.querySelector('main');
const winnerPrompt = document.createElement("div");
const playAgainBtn = document.createElement("button");
playAgainBtn.textContent = 'Play Again';
winnerPrompt.classList.add("winner");

const elementsToRemove = [
  scoreBoardContainer,
  playerChoiceContainer,
  round
];

const winnerElements = [
  winnerPrompt,
  playAgainBtn
];

function addElements(elements) {
  elements.forEach(element => {
    mainContainer.appendChild(element);
  });
}

function removeElementAndChildren(parentElement) {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
  parentElement.remove();
}




function winnerOfRound(result) {
  switch(result) {
    case "You win! Rock beats Scissors." :
    case "You win! Paper beats Rock.":
    case "You win! Scissors beats Paper.":
      playerTotalPoints++;
      playerScore.textContent = `${playerTotalPoints}`;
      break;
    case "You Lose! Paper beats Rock.":
    case "You lose! Scissors beats Paper.":
    case "You lose! Rock beats Scissors.":
      computerTotalPoints++;
      computerScore.textContent = `${computerTotalPoints}`;
      break;
  }

  if(playerTotalPoints === 5) {
    elementsToRemove.forEach(element => removeElementAndChildren(element));
    winnerPrompt.textContent = 'Congrats you won the round!';
    addElements(winnerElements);
  } else if (computerTotalPoints === 5) {
    elementsToRemove.forEach(element => removeElementAndChildren(element));
    winnerPrompt.textContent = 'Nice try maybe next time!';
    addElements(winnerElements);
  }
}

playAgainBtn.addEventListener('click', function() {
  location.reload();
})