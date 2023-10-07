const readline = require('readline-sync');
const MESSAGES = require('./rps.json');
const WIN_CONDITION = 3;
// const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const MOVES = {
  rock: { abbreviation: 'r', beats: ['scissors', 'lizard']},
  lizard: { abbreviation: 'l', beats: ['spock,', 'paper']},
  spock: { abbreviation: 'sp', beats: ['scissors', 'rock']},
  paper:  { abbreviation: 'p', beats: ['spock', 'rock']},
  scissors: { abbreviation: 'sc', beats: ['paper', 'lizard']}
};

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
  if (Object.keys(MESSAGES).includes(message)) {
    console.log(`\n=> ${MESSAGES[message]}`);
  } else {
    console.log(`=> ${message}`);
  }
}

function playerWins(choice, computerChoice) {
  return MOVES[choice].beats.includes(computerChoice);
}

function displayChoice(choice, computerChoice) {
  prompt(`You chose: ${choice}\n=> The computer chose: ${computerChoice}`);
}


function displayWinner(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    displayChoice(choice, computerChoice);
    prompt('you win');
  } else if (choice === computerChoice) {
    displayChoice(choice, computerChoice);
    prompt("tie");
  } else {
    displayChoice(choice, computerChoice);
    prompt("you lose");
  }
}

function getUserChoice() {
  prompt(`choice`);
  let choice = readline.question().toLowerCase();

  while (!['r', 'rock', 'p', 'paper', 'l', 'lizard', 'sp', 'spock', 'sc', 'scissors'].includes(choice)) {
    prompt("invalidChoice");
    choice = readline.question();
  }
  clearScreen();
  return choice;
}

function keepScore(choice, computerChoice, scores) {
  if (playerWins(choice, computerChoice)) {
    scores.player += 1;
  } else if (choice === computerChoice) {
    scores.ties += 1;
  } else {
    scores.computer += 1;
  }
  prompt(`Score: ${scores.player} - ${scores.computer} (Ties: ${scores.ties})`);
}

function bestOfFiveCheckAndEnd(scores) {
  if (scores.player === WIN_CONDITION) {
    prompt('win game');
    return scores.player;
  } else if (scores.computer === WIN_CONDITION) {
    prompt('lost game');
    return scores.computer;
  }
  return true;
}

function userWantsToPlayAgain() {
  printLines();
  prompt('play again');
  let answer = readline.question();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('invalidAns');
    answer = readline.question().toLowerCase();
  }
  clearScreen();
  return ['y', 'yes'].includes(answer);
}

function getComupterChoice() {
  var keys = [];
  for (let property in MOVES) {
    if (MOVES.hasOwnProperty(property)) {
      keys.push(property);
    }
  }
  return (keys[Math.floor(keys.length * Math.random())]);
}

function clearScreen() {
  console.clear();
}

function printLines() {
  console.log('+-----------------------------------------------------------+');
}

function gameRounds(scores) {
  while (scores.player < WIN_CONDITION && scores.computer < WIN_CONDITION) {
    let userChoice = convertCharToChoice().toLowerCase();

    let computerChoice = getComupterChoice();

    displayWinner(userChoice, computerChoice);
    keepScore(userChoice, computerChoice, scores);
    printLines();
  }
}

function gameMainBody() {
  while (true) {
    let scores = {
      player: 0,
      computer: 0,
      ties: 0
    };

    gameRounds(scores);

    bestOfFiveCheckAndEnd(scores);

    if (!userWantsToPlayAgain()) {
      clearScreen();
      prompt('Thanks');
      break;
    }
  }
}

function initializeRockPaperScissorsLizardSpock() {
  clearScreen();
  prompt('welcome');
  prompt('gamerules');
  prompt('win condition');
  printLines();
  gameMainBody();
}

initializeRockPaperScissorsLizardSpock();