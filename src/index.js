import "./styles.css";
import { renderGameBoard } from "./domController";
import GameBoard from "./gameboard";
import Ship from "./ship";
import Player from "./player";

let selectedShipIndex = null;
let playerShipsConfig = [
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

const startMenu = document.createElement("div");
startMenu.id = "start-menu";
startMenu.innerHTML = `
<h2>Battleship</h2>
<button id="start-button">Start Game</button>
`;

document.body.appendChild(startMenu);

let gameState = "menu";

const startGame = () => {
  startMenu.style.display = "none";
  gameState = "placement";

  humanGameBoard.reset();
  enemyGameBoard.reset();

  playerContainer.classList.remove("hidden");
  enemyContainer.classList.remove("hidden");

  renderGameBoard("#player-container", "player-board", handlePlayerCellClick);
  renderGameBoard("#enemy-container", "enemy-board", handleEnemyCellClicks);

  console.log("Ship placement phase initiated.");

  spawnPlayerShips();
  finalizeButton.classList.remove("hidden");

  setTimeout(() => {
    spawnComputerShips();
    //
  }, 5000);
};

document.getElementById("start-button").addEventListener("click", startGame);

const app = document.querySelector("#app");

const heading = document.createElement("h1");
heading.textContent = "Welcome to Battleship!";
app.appendChild(heading);

const playerContainer = document.createElement("div");
playerContainer.id = "player-container";
playerContainer.classList.add("hidden");
const enemyContainer = document.createElement("div");
enemyContainer.id = "enemy-container";
enemyContainer.classList.add("hidden");

app.appendChild(playerContainer);
app.appendChild(enemyContainer);

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
    cell.style.backgroundColor = "blue";
    cell.textContent = "•";
  }

  if (enemyGameBoard.isAllSunk()) {
    alert("Player wins!");
    return;
  }

  currentTurn = "computer";
  setTimeout(computerMove, 1000);
};

const flipButton = document.createElement("button");
flipButton.id = "flip-button";
flipButton.textContent = "Flip";
flipButton.classList.add("hidden");
app.appendChild(flipButton);

flipButton.addEventListener("click", () => {
  if (selectedShipIndex === null) return;

  const currentOrientation = playerShipsConfig[selectedShipIndex].orientation;
  playerShipsConfig[selectedShipIndex].orientation =
    currentOrientation === "horizontal" ? "vertical" : "horizontal";

  spawnPlayerShips();

  selectedShipIndex = null;
  flipButton.classList.add("hidden");
});

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

const updatePlayerBoardUI = () => {
  // Clear any previous ship highlights
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const cell = document.getElementById(`cell-player-board-${row}-${col}`);
      if (cell) {
        cell.classList.remove("ship-present");
        cell.classList.remove("selected");
      }
    }
  }

  // For each placed ship, add the ship-present class to its coordinates
  humanGameBoard.ships.forEach((placed) => {
    placed.coordinates.forEach((coord) => {
      const cell = document.getElementById(
        `cell-player-board-${coord[0]}-${coord[1]}`
      );
      if (cell) {
        cell.classList.add("ship-present");
      }
    });
  });
};

const spawnPlayerShips = () => {
  humanGameBoard.reset();

  playerShipsConfig.forEach((shipConfig) => {
    const ship = new Ship(shipConfig.size);
    humanGameBoard.placeShip(ship, shipConfig.start, shipConfig.orientation);
  });

  updatePlayerBoardUI();
};

const handlePlayerCellClick = (coordinates) => {
  const cell = document.getElementById(
    `cell-player-board-${coordinates[0]}-${coordinates[1]}`
  );

  if (selectedShipIndex === null) {
    selectedShipIndex = humanGameBoard.ships.findIndex((placed) =>
      placed.coordinates.some(
        (coord) => coord[0] === coordinates[0] && coord[1] === coordinates[1]
      )
    );

    if (selectedShipIndex !== -1) {
      const selectedShip = humanGameBoard.ships[selectedShipIndex];
      selectedShip.coordinates.forEach((coord) => {
        const shipCell = document.getElementById(
          `cell-player-board-${coord[0]}-${coord[1]}`
        );
        if (shipCell) {
          shipCell.classList.add("selected");
        }
      });
      flipButton.classList.remove("hidden");
    }
  } else {
    playerShipsConfig[selectedShipIndex].start = coordinates;
    spawnPlayerShips();

    selectedShipIndex = null;
    flipButton.classList.add("hidden");
  }
};

//

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

const finalizeButton = document.createElement("button");
finalizeButton.id = "finalize-button";
finalizeButton.textContent = "Start Game";
finalizeButton.classList.add("hidden");
app.appendChild(finalizeButton);

finalizeButton.addEventListener("click", () => {
  gameState = "playing";

  finalizeButton.classList.add("hidden");

  console.log("Game started! Player's ships locked in.");
});

function toggleRevealComputerShips() {
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
}

const revealButton = document.createElement("button");
revealButton.textContent = "Toggle Reveal Computer Ships";
revealButton.id = "reveal-button";
app.appendChild(revealButton);

revealButton.addEventListener("click", toggleRevealComputerShips);
