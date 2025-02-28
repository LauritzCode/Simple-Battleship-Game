import "./styles.css";
import { renderGameBoard } from "./domController";
import GameBoard from "./gameboard";
import Ship from "./ship";

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

const enemyGameBoard = new GameBoard();

const enemyDemoShip = new Ship(3);
enemyGameBoard.placeShip(enemyDemoShip, [0, 0], "horizontal");

const handleEnemyCellClicks = (coordinates) => {
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
};

renderGameBoard("#player-container", "player-board");
renderGameBoard("#enemy-container", "enemy-board", handleEnemyCellClicks);
