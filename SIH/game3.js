
let gameContainer = document.getElementById("game-container");
let playerToken = document.createElement("div");
playerToken.className = "token";
gameContainer.appendChild(playerToken);

let snakesAndLadders = [
  { start: 17, end: 7 }, // snake from 17 to 7
  { start: 54, end: 34 }, // snake from 54 to 34
  { start: 62, end: 19 }, // snake from 62 to 19
  { start: 64, end: 60 }, // ladder from 64 to 60
  { start: 71, end: 83 }, // ladder from 71 to 83
  { start: 87, end: 91 }, // ladder from 87 to 91
];

let currentPlayerPosition = 0;

function rollDice() {
  let diceValue = Math.floor(Math.random() * 6) + 1;
  console.log(`You rolled a ${diceValue}`);
  movePlayer(diceValue);
}

function movePlayer(steps) {
  currentPlayerPosition += steps;
  if (currentPlayerPosition > 100) {
    currentPlayerPosition = 100;
  }
  checkForSnakesAndLadders();
  updateTokenPosition();
}

function checkForSnakesAndLadders() {
  for (let i = 0; i < snakesAndLadders.length; i++) {
    if (snakesAndLadders[i].start === currentPlayerPosition) {
      currentPlayerPosition = snakesAndLadders[i].end;
      console.log(`You landed on a ${snakesAndLadders[i].start > snakesAndLadders[i].end ? "snake" : "ladder"}`);
    }
  }
}

function updateTokenPosition() {
  playerToken.style.left = `${currentPlayerPosition * 20}px`;
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("roll-button").addEventListener("click", rollDice);
});

rollDice(); // start the game with a roll of the dice