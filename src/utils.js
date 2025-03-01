export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomOrientation = () => {
  return Math.random() < 0.6 ? "horizontal" : "vertical";
};

export const getRandomStart = (size, orientation) => {
  const maxRow = orientation === "vertical" ? 10 - size : 9;
  const maxCol = orientation === "horizontal" ? 10 - size : 9; // Fixed typo from "horizontal?"
  const row = getRandomInt(0, maxRow);
  const col = getRandomInt(0, maxCol);
  return [row, col];
};
