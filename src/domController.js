import { gameState } from "./gameLogic";

export const renderGameBoard = (
  containerSelector,
  boardId,
  clickHandler = null
) => {
  const container = document.querySelector(containerSelector);
  const board = document.createElement("div");
  board.id = boardId;
  board.classList.add("gameboard");

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.id = `cell-${boardId}-${row}-${col}`;
      cell.dataset.row = row;
      cell.dataset.col = col;

      if (clickHandler) {
        cell.addEventListener("click", () => {
          clickHandler([row, col]);
        });
      }

      board.appendChild(cell);
    }
  }

  container.appendChild(board);
};

export const createHeading = () => {
  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Battleship!";
  return heading;
};

export const createGameContainers = () => {
  const gameboardsContainer = document.createElement("div");
  gameboardsContainer.id = "gameboards-container";

  const playerContainer = document.createElement("div");
  playerContainer.id = "player-container";
  playerContainer.classList.add("hidden");

  const enemyContainer = document.createElement("div");
  enemyContainer.id = "enemy-container";
  enemyContainer.classList.add("hidden");

  gameboardsContainer.appendChild(playerContainer);
  gameboardsContainer.appendChild(enemyContainer);

  return { playerContainer, enemyContainer, gameboardsContainer };
};

export const createButtons = () => {
  const buttonsContainer = document.createElement("div");
  buttonsContainer.id = "buttons-container";

  const startButton = document.createElement("button");
  startButton.id = "start-button";
  startButton.textContent = "Start Game";

  const restartButton = document.createElement("button");
  restartButton.id = "restart-btn";
  restartButton.textContent = "Restart Game";
  restartButton.classList.add("hidden");

  const flipButton = document.createElement("button");
  flipButton.id = "flip-button";
  flipButton.textContent = "Flip";
  flipButton.classList.add("hidden");

  const finalizeButton = document.createElement("button");
  finalizeButton.id = "finalize-button";
  finalizeButton.textContent = "Finalize Placement";
  finalizeButton.classList.add("hidden");

  const revealButton = document.createElement("button");
  revealButton.id = "reveal-button";
  revealButton.textContent = "Toggle Reveal Computer Ships";
  revealButton.classList.add("hidden");

  buttonsContainer.appendChild(startButton);
  buttonsContainer.appendChild(flipButton);
  buttonsContainer.appendChild(finalizeButton);
  buttonsContainer.appendChild(revealButton);
  buttonsContainer.appendChild(restartButton);

  return {
    startButton,
    flipButton,
    finalizeButton,
    revealButton,
    buttonsContainer,
    restartButton,
  };
};

export const updatePlayerBoardUI = (humanGameBoard) => {
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const cell = document.getElementById(`cell-player-board-${row}-${col}`);
      if (cell) {
        cell.classList.remove("ship-present");
        cell.classList.remove("selected");
      }
    }
  }

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

export const updateCellAfterAttack = (boardId, coordinates, wasHit) => {
  if (gameState !== "playing") return;

  const cell = document.getElementById(
    `cell-${boardId}-${coordinates[0]}-${coordinates[1]}`
  );
  if (wasHit) {
    cell.style.backgroundColor = "red";
    cell.textContent = "X";
  } else {
    cell.style.backgroundColor = "blue";
    cell.textContent = "";
  }
};

export const toggleRevealComputerShips = (enemyGameBoard) => {
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
