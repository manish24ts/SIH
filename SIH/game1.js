const gameBoard = document.getElementById('game-board');
const playerSelection = document.getElementById('player-selection');
const gamePieces = document.querySelectorAll('.game-piece');
const die = document.createElement('button');
die.textContent = 'Roll Die';
die.onclick = rollDie;
document.body.appendChild(die);

let currentPlayer = null;
let currentPiece = null;
let rollResult = 0;

gamePieces.forEach((piece) => {
  piece.onclick = () => {
    if (!currentPlayer) {
      currentPlayer = piece.id;
      currentPiece = piece;
      piece.style.border = '2px solid black';
    }
  };
});

function rollDie() {
  rollResult = Math.floor(Math.random() * 6) + 1;
  alert(`You rolled a ${rollResult}`);
  movePiece();
}

function movePiece() {
  if (currentPiece) {
    let currentPosition = getCurrentPosition(currentPiece);
    let newPosition = currentPosition + rollResult;
    if (newPosition <= 56) {
      movePieceToPosition(currentPiece, newPosition);
    } else {
      alert('You reached the end of the board!');
      resetGame();
    }
  }
}

function getCurrentPosition(piece) {
  let position = 0;
  for (let i = 0; i < gameBoard.rows.length; i++) {
    for (let j = 0; j < gameBoard.rows[i].cells.length; j++) {
      if (gameBoard.rows[i].cells[j].contains(piece)) {
        position = i * 8 + j;
        break;
      }
    }
  }
  return position;
}

function movePieceToPosition(piece, position) {
  let row = Math.floor(position / 8);
  let col = position % 8;
  gameBoard.rows[row].cells[col].appendChild(piece);
}

function resetGame() {
  currentPlayer = null;
  currentPiece = null;
  rollResult = 0;
  gamePieces.forEach((piece) => {
    piece.style.border = '1px solid black';
  });
}
const gameBoard = document.getElementById('game-board');
const playerSelection = document.getElementById('player-selection');
const gamePieces = document.querySelectorAll('.game-piece');
const die = document.createElement('button');
die.textContent = 'Roll Die';
die.onclick = rollDie;
document.body.appendChild(die);

let currentPlayer = null;
let currentPiece = null;
let rollResult = 0;
let playerPieces = {
  'player1': ['piece1', 'piece2', 'piece3', 'piece4'],
  'player2': ['piece5', 'piece6', 'piece7', 'piece8']
};

gamePieces.forEach((piece) => {
  piece.onclick = () => {
    if (!currentPlayer) {
      currentPlayer = piece.id.split('-')[0];
      currentPiece = piece;
      piece.style.border = '2px solid black';
    }
  };
});

function rollDie() {
  rollResult = Math.floor(Math.random() * 6) + 1;
  alert(`You rolled a ${rollResult}`);
  movePiece();
}

function movePiece() {
  if (currentPiece) {
    let currentPosition = getCurrentPosition(currentPiece);
    let newPosition = currentPosition + rollResult;
    if (newPosition <= 56) {
      movePieceToPosition(currentPiece, newPosition);
    } else {
      alert('You reached the end of the board!');
      resetGame();
    }
  }
}

function getCurrentPosition(piece) {
  let position = 0;
  for (let i = 0; i < gameBoard.rows.length; i++) {
    for (let j = 0; j < gameBoard.rows[i].cells.length; j++) {
      if (gameBoard.rows[i].cells[j].contains(piece)) {
        position = i * 8 + j;
        break;
      }
    }
  }
  return position;
}

function movePieceToPosition(piece, position) {
  let row = Math.floor(position / 8);
  let col = position % 8;
  gameBoard.rows[row].cells[col].appendChild(piece);
  updatePlayerPieces(piece, position);
}

function updatePlayerPieces(piece, position) {
  let player = piece.id.split('-')[0];
  let pieceIndex = playerPieces[player].indexOf(piece.id);
  playerPieces[player][pieceIndex] = `piece-${position}`;
}

function resetGame() {
  currentPlayer = null;
  currentPiece = null;
  rollResult = 0;
  gamePieces.forEach((piece) => {
    piece.style.border = '1px solid black';
  });
  playerPieces = {
    'player1': ['piece1', 'piece2', 'piece3', 'piece4'],
    'player2': ['piece5', 'piece6', 'piece7', 'piece8']
  };
}