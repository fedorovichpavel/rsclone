//size area and one element
const boardSize = 20;
const boardSizeX = 11;
const boardSizeY = 23;
const cellSize = 20;

const gameHeight = cellSize * boardSizeY;

const gameWidth = cellSize * boardSizeX;

export const settings = {
    gameWidth,
    gameHeight,
    boardSize,
    boardSizeX,
    boardSizeY,
    cellSize,
    delay: 300,
    minFoodNumber: 5,
    maxFoodNumber: 20,
    numberFlowers: 7,
};
