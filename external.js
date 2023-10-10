const playerSelection = document.querySelectorAll(".choice");

playerSelection.forEach(button => {
  button.addEventListener('click', function() {
    const myValue = button.getAttribute('data-option');
    const computerValue = getComputerChoice();
    const result = playRound(myValue, computerValue);
    console.log(result);
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
    return "It's a tie!";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return "You Lose! Paper beats Rock.";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "You win! Rock beats Scissors.";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "You win! Paper beats Rock.";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return "You lose! Scissors beats Paper.";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "You win! Scissors beats Paper.";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return "You lose! Rock beats Scissors.";
  }
}


function game() {
  
}