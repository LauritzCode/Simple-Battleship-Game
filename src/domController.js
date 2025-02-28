export const renderGameBoard = (clickHandler) => {
  const container = document.querySelector("#app");
  const board = document.createElement("div");
  board.id = "gameboard";

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.id = `cell-${row}-${col}`;
      cell.dataset.row = row;
      cell.dataset.col = col;

      cell.addEventListener("click", () => {
        clickHandler([row, col]);
      });

      board.appendChild(cell);
    }
  }

  container.appendChild(board);
};
