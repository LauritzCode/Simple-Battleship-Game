import "./styles.css";
import { renderGameBoard } from "./domController";
import GameBoard from "./gameboard";

const app = document.querySelector("#app");
const heading = document.createElement("h1");
heading.textContent = "Welcome to Battleship!";
app.appendChild(heading);

const gameboard = new GameBoard();

import Ship from "./ship";
const demoShip = new Ship(3);
gameboard.placeShip(demoShip, [0, 0], "horizontal");

function handleCellClick(coordinates) {
  console.log(`Cell clicked: [${coordinates[0]}, ${coordinates[1]}]`);

  const wasHit = gameboard.receiveAttack(coordinates);
  const cell = document.getElementById(
    `cell-${coordinates[0]}-${coordinates[1]}`
  );
  if (wasHit) {
    cell.style.background = "red";
    cell.textContent = "X";
  } else {
    cell.style.backgroundColor = "blue";
    cell.textContent = "•";
  }
}

renderGameBoard(handleCellClick);
