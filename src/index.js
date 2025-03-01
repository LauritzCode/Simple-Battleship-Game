import "./styles.css";
import {
  createHeading,
  createGameContainers,
  createButtons,
  renderGameBoard,
} from "./domController";
import {
  startGame,
  handlePlayerCellClick,
  handleEnemyCellClicks,
  flipShip,
  selectedShipIndex,
  updateCursorState,
  gameState,
  finalizePlacement,
  toggleRevealComputerShips,
  resetGame,
} from "./gameLogic";

// Initialize UI
const heading = createHeading();
const { playerContainer, enemyContainer, gameboardsContainer } =
  createGameContainers();
const {
  startButton,
  flipButton,
  finalizeButton,
  revealButton,
  buttonsContainer,
  restartButton,
} = createButtons();

const app = document.querySelector("#app");
app.appendChild(heading);
app.appendChild(gameboardsContainer);
app.appendChild(buttonsContainer);

// Set up event listeners
startButton.addEventListener("click", () => {
  startButton.classList.add("hidden");
  flipButton.classList.remove("hidden");
  finalizeButton.classList.remove("hidden");
  // revealButton.classList.remove("hidden"); <-- if you wanna see the computers ships ( CHEATING !!! )
  restartButton.classList.remove("hidden");
  renderGameBoard("#player-container", "player-board", handlePlayerCellClick);
  renderGameBoard("#enemy-container", "enemy-board", handleEnemyCellClicks);
  startGame(playerContainer, enemyContainer, finalizeButton);
  updateCursorState(); // Update cursor state when game starts
});

flipButton.addEventListener("click", () => {
  flipShip();
});

finalizeButton.addEventListener("click", () => {
  finalizePlacement();
  finalizeButton.classList.add("hidden");
  flipButton.classList.add("hidden");
  updateCursorState();
});

revealButton.addEventListener("click", toggleRevealComputerShips);

restartButton.addEventListener("click", () => {
  resetGame();
  flipButton.classList.remove("hidden");
  finalizeButton.classList.remove("hidden");
});

const originalHandlePlayerCellClick = handlePlayerCellClick;
handlePlayerCellClick = (coordinates) => {
  originalHandlePlayerCellClick(coordinates);
  if (selectedShipIndex !== null) {
    flipButton.classList.remove("hidden");
  } else {
    flipButton.classList.add("hidden");
  }
};
