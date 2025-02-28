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
