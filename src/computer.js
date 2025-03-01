import { renderGameBoard } from "./domController";
import GameBoard from "./gameboard";
import Ship from "./ship";

export const computerShipsConfig = [
  { size: 5 },
  { size: 4 },
  { size: 3 },
  { size: 3 },
  { size: 2 },
];

export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomOrientation = () => {
  return Math.floor() < 0.5 ? "horizontal" : "vertical";
};

export const getRandomStart = (size, orientation) => {
  const maxRow = orientation === "vertical" ? 10 - size : 9;
  const maxCol = orientation === "horizontal?" ? 10 - size : 9;
  const row = getRandomInt(0, maxRow);
  const col = getRandomInt(0, maxCol);
  return [row, col];
};

const enemyGameBoard = new GameBoard();

export const spawnComputerShips = () => {
  enemyGameBoard.reset();
  computerShipsConfig.forEach((shipConfig) => {
    const ship = new Ship(shipConfig.size);
    let orientation = getRandomOrientation();
    let start = getRandomStart(shipConfig.size, orientation);

    enemyGameBoard.placeShip(ship, start, orientation);
  });

  console.log("Computer is ready!");
};
