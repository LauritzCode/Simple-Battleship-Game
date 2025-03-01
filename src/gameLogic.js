// src/gameLogic.js

import GameBoard from "./gameboard";
import Ship from "./ship";
import Player from "./player";
import { getRandomOrientation, getRandomStart } from "./utils";
import { updatePlayerBoardUI, updateCellAfterAttack } from "./domController";

export let selectedShipIndex = null;
export let playerShipsConfig = [
  { size: 5, start: [0, 0], orientation: "horizontal" },
  { size: 4, start: [1, 0], orientation: "horizontal" },
  { size: 3, start: [2, 0], orientation: "horizontal" },
  { size: 3, start: [3, 0], orientation: "horizontal" },
  { size: 2, start: [4, 0], orientation: "horizontal" },
];

export const computerShipsConfig = [
  { size: 5 },
  { size: 4 },
  { size: 3 },
  { size: 3 },
  { size: 2 },
];

const humanGameBoard = new GameBoard();
const enemyGameBoard = new GameBoard();
const computerPlayer = new Player("computer");

export let gameState = "menu";
let currentTurn = "player";

export const resetGame = () => {
  console.log("Resetting game...");
  gameState = "placement";
  selectedShipIndex = null;
  currentTurn = "player";

  // Reset player ships to initial state
  playerShipsConfig.length = 0;
  playerShipsConfig.push(
    { size: 5, start: [0, 0], orientation: "horizontal" },
    { size: 4, start: [1, 0], orientation: "horizontal" },
    { size: 3, start: [2, 0], orientation: "horizontal" },
    { size: 3, start: [3, 0], orientation: "horizontal" },
    { size: 2, start: [4, 0], orientation: "horizontal" }
  );

  // Fully reset game boards
  humanGameBoard.reset();
  enemyGameBoard.reset();
  humanGameBoard.ships = [];
  humanGameBoard.missedAttacks = [];
  enemyGameBoard.ships = [];
  enemyGameBoard.missedAttacks = [];

  // Clear enemy board visuals
  const enemyCells = document.querySelectorAll("#enemy-board .cell");
  enemyCells.forEach((cell) => {
    cell.classList.remove("ship-present", "playing"); // Remove relevant classes
    cell.style.backgroundColor = "";
    cell.textContent = ""; // Clear the "X" markers
  });

  const playerCells = document.querySelectorAll("#player-board .cell");
  playerCells.forEach((cell) => {
    // cell.classList.remove("ship-present", "playing");
    cell.style.backgroundColor = "";
    cell.textContent = "";
  });

  // playerContainer.classList.remove("hidden");
  // enemyContainer.classList.remove("hidden");

  updateCursorState();
  spawnPlayerShips();
};

export const updateCursorState = () => {
  const playerCells = document.querySelectorAll("#player-board .cell");
  if (gameState === "placement") {
    playerCells.forEach((cell) => cell.classList.add("notPlaying"));
  } else {
    playerCells.forEach((cell) => cell.classList.remove("notPlaying"));
  }

  const computerCells = document.querySelectorAll("#enemy-board .cell");
  if (gameState === "playing") {
    computerCells.forEach((cell) => cell.classList.add("playing"));
  } else {
    computerCells.forEach((cell) => cell.classList.remove("playing"));
  }
};

const isFlipValid = (selectedIndex, newOrientation) => {
  const tempBoard = new GameBoard();
  playerShipsConfig.forEach((config, index) => {
    if (index === selectedIndex) return;
    const ship = new Ship(config.size);
    tempBoard.placeShip(ship, config.start, config.orientation);
  });

  const selectedConfig = playerShipsConfig[selectedIndex];
  const testShip = new Ship(selectedConfig.size);
  return tempBoard.isPlacementValid(
    testShip,
    selectedConfig.start,
    newOrientation
  );
};

// Start the game
export const startGame = (playerContainer, enemyContainer, finalizeButton) => {
  gameState = "placement";
  humanGameBoard.reset();
  enemyGameBoard.reset();

  playerContainer.classList.remove("hidden");
  enemyContainer.classList.remove("hidden");

  spawnPlayerShips();
  finalizeButton.classList.remove("hidden");
};

// Place player ships on the board
export const spawnPlayerShips = () => {
  humanGameBoard.reset();
  playerShipsConfig.forEach((shipConfig) => {
    const ship = new Ship(shipConfig.size);
    humanGameBoard.placeShip(ship, shipConfig.start, shipConfig.orientation);
  });
  updatePlayerBoardUI(humanGameBoard);
};

// Place computer ships randomly
export const spawnComputerShips = () => {
  enemyGameBoard.reset();
  computerShipsConfig.forEach((shipConfig) => {
    const ship = new Ship(shipConfig.size);
    let placed = false;
    while (!placed) {
      let orientation = getRandomOrientation();
      let start = getRandomStart(shipConfig.size, orientation);
      placed = enemyGameBoard.placeShip(ship, start, orientation);
    }
  });
  console.log("Computer is ready!");
};

export const toggleRevealComputerShips = () => {
  enemyGameBoard.ships.forEach((placed) => {
    placed.coordinates.forEach((coord) => {
      const cell = document.getElementById(
        `cell-enemy-board-${coord[0]}-${coord[1]}`
      );
      if (cell) {
        cell.classList.toggle("ship-present");
      }
    });
  });
};

// Handle player clicking their own board (for ship movement)
export const handlePlayerCellClick = (coordinates) => {
  if (gameState === "playing") return;

  if (selectedShipIndex === null) {
    const index = humanGameBoard.ships.findIndex((placed) =>
      placed.coordinates.some(
        (coord) => coord[0] === coordinates[0] && coord[1] === coordinates[1]
      )
    );
    if (index !== -1) {
      selectedShipIndex = index;
      const selectedShip = humanGameBoard.ships[selectedShipIndex];
      selectedShip.coordinates.forEach((coord) => {
        const cell = document.getElementById(
          `cell-player-board-${coord[0]}-${coord[1]}`
        );
        if (cell) cell.classList.add("selected");
      });
    }
  } else {
    const tempBoard = new GameBoard();
    const tempConfig = playerShipsConfig.map((config) => ({
      ...config,
      start: [...config.start],
    }));
    tempConfig[selectedShipIndex].start = coordinates;

    let allPlaced = true;
    tempConfig.forEach((shipConfig) => {
      const ship = new Ship(shipConfig.size);
      const placed = tempBoard.placeShip(
        ship,
        shipConfig.start,
        shipConfig.orientation
      );
      if (!placed) allPlaced = false;
    });

    if (allPlaced) {
      playerShipsConfig[selectedShipIndex].start = coordinates;
      spawnPlayerShips();
    } else {
      alert(
        "Cannot move ship: placement would cause collision or go out of bounds."
      );
    }
    selectedShipIndex = null;
  }
};

// Handle player attacking the enemy board :P

export const handleEnemyCellClicks = (coordinates) => {
  if (gameState !== "playing" || currentTurn !== "player") return;
  const wasHit = enemyGameBoard.receiveAttack(coordinates);
  updateCellAfterAttack("enemy-board", coordinates, wasHit);

  if (gameState === "playing") {
    if (enemyGameBoard.isAllSunk()) {
      alert("Player wins!");
      return;
    }

    if (wasHit) {
    } else {
      currentTurn = "computer";
      setTimeout(computerMove, 1000);
    }
  }
};

// Computer makes a move!
export const computerMove = () => {
  const move = computerPlayer.generateRandomMove();
  const wasHit = humanGameBoard.receiveAttack(move);
  updateCellAfterAttack("player-board", move, wasHit);

  if (humanGameBoard.isAllSunk()) {
    alert("Computer Wins!");
    return;
  }

  if (wasHit) {
    setTimeout(computerMove, 2000);
  } else {
    currentTurn = "player";
  }
};

// Flip the selected ship
export const flipShip = () => {
  if (selectedShipIndex === null) return;
  const currentOrientation = playerShipsConfig[selectedShipIndex].orientation;
  const newOrientation =
    currentOrientation === "horizontal" ? "vertical" : "horizontal";

  if (!isFlipValid(selectedShipIndex, newOrientation)) {
    alert(
      "Cannot flip ship: placement would cause collision or go out of bounds."
    );
    return false;
  }

  playerShipsConfig[selectedShipIndex].orientation = newOrientation;
  spawnPlayerShips();
  selectedShipIndex = null;
  return true;
};

// Finalize ship placement and start playing
export const finalizePlacement = () => {
  spawnComputerShips();
  gameState = "playing";
  console.log("Game started! Player's ships locked in.");
};
