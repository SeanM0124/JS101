const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};

let playerScore;
let computerScore;
let ties;

function convertCharToChoice() {
  let userChoice = getUserChoice();
  switch (userChoice) {
    case 'r': return 'rock';
    case 'sc': return 'scissors';
    case 'p': return 'paper';
    case 'l': return 'lizard';
    case 'sp': return 'spock';
    default:
      return userChoice;
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}


function displayWinner(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    prompt(`You chose: ${choice}\n=> The computer chose: ${computerChoice}`);
    prompt('You win this round!');
  } else if (choice === computerChoice) {
    prompt(`You chose: ${choice}\n=> The computer chose: ${computerChoice}`);
    prompt("This round is a tie!");
  } else {
    prompt(`You chose: ${choice}\n=> The computer chose: ${computerChoice}`);
    prompt("Computer wins this round!");
  }
}

function getUserChoice() {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}.`);
  let choice = readline.question();

  while (!['r', 'rock', 'p', 'paper', 'l', 'lizard', 'sp', 'spock', 'sc', 'scissors'].includes(choice)) {
    prompt("That is not a valid choice, try again.");
    choice = readline.question();
  }
  clearScreen();
  return choice;
}

function keepScore(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    playerScore += 1;
  } else if (choice === computerChoice) {
    ties += 1;
  } else {
    computerScore += 1;
  }
  prompt(`Score: ${playerScore} - ${computerScore} (Ties: ${ties})`);
}

function bestOfFiveCheckAndEnd() {
  if (playerScore === 3) {
    prompt('You win the game!');
    return playerScore;
  } else if (computerScore === 3) {
    prompt('You lost..  :(');
    return computerScore;
  }
  return true;
}

function userWantsToPlayAgain() {
  printLines();
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  clearScreen();
  return ['y', 'yes'].includes(answer);
}

function getComupterChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[randomIndex];
}

function clearScreen() {
  console.clear();
}

function printLines() {
  console.log('+-----------------------------------------------------------+');
}

function gameRounds() {
  while (playerScore < 3 && computerScore < 3) {
    let userChoice = convertCharToChoice();

    let computerChoice = getComupterChoice();

    displayWinner(userChoice, computerChoice);
    keepScore(userChoice, computerChoice);
    printLines();
  }
}

function gameMainBody() {
  while (true) {
    playerScore = 0;
    computerScore = 0;
    ties = 0;

    gameRounds();

    bestOfFiveCheckAndEnd();

    if (!userWantsToPlayAgain()) {
      clearScreen();
      prompt('Thank you for playing!');
      break;
    }
  }
}

function initializeRockPaperScissorsLizardSpock() {
  clearScreen();
  prompt('Welcome to Rock-Paper-Scissors-Lizard-Spock!');
  prompt('The first to 3 wins. Good Luck!');
  printLines();
  gameMainBody();
}

initializeRockPaperScissorsLizardSpock();