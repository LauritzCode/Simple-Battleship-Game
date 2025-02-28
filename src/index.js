import "./styles.css";
import { renderGameBoard } from "./domController";
import GameBoard from "./gameboard";
import Ship from "./ship";
import Player from "./player";

const app = document.querySelector("#app");

const heading = document.createElement("h1");
heading.textContent = "Welcome to Battleship!";
app.appendChild(heading);

const playerContainer = document.createElement("div");
playerContainer.id = "player-container";
const enemyContainer = document.createElement("div");
enemyContainer.id = "enemy-container";

app.appendChild(playerContainer);
app.appendChild(enemyContainer);

const humanGameBoard = new GameBoard();
const enemyGameBoard = new GameBoard();

const humanDemoShip = new Ship(3);
humanGameBoard.placeShip(humanDemoShip, [0, 0], "horizontal");

const enemyDemoShip = new Ship(3);
enemyGameBoard.placeShip(enemyDemoShip, [0, 0], "horizontal");

const computerPlayer = new Player("computer");

let currentTurn = "player";

const handleEnemyCellClicks = (coordinates) => {
  if (currentTurn !== "player") return;
  console.log(`Enemy cell clicked [${coordinates[0]}, ${coordinates[1]}]`);

  const wasHit = enemyGameBoard.receiveAttack(coordinates);
  const cell = document.getElementById(
    `cell-enemy-board-${coordinates[0]}-${coordinates[1]}`
  );

  if (wasHit) {
    cell.style.backgroundColor = "red";
    cell.textContent = "X";
  } else {
    cell.style.backgroundColor = "blue"; // Miss indication
    cell.textContent = "•";
  }

  if (enemyGameBoard.isAllSunk()) {
    alert("Player wins!");
    return;
  }

  currentTurn = "computer";
  setTimeout(computerMove, 1000);
};

const computerMove = () => {
  const move = computerPlayer.generateRandomMove();
  console.log(`Computer attacks player's cell: [${move[0]}, ${move[1]}]`);
  const wasHit = humanGameBoard.receiveAttack(move);
  const cell = document.getElementById(
    `cell-player-board-${move[0]}-${move[1]}`
  );
  if (wasHit) {
    cell.style.backgroundColor = "red";
    cell.textContent = "X";
  } else {
    cell.style.backgroundColor = "blue";
    cell.innerText = "•";
  }

  if (humanGameBoard.isAllSunk()) {
    alert("Computer Wins!");
    return;
  }
  currentTurn = "player";
};

renderGameBoard("#player-container", "player-board");
renderGameBoard("#enemy-container", "enemy-board", handleEnemyCellClicks);
