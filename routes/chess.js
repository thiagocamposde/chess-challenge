const express = require("express");
const axios = require("axios");
const util = require("util");

const router = express.Router();

const algebraicMap = { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8 };

const algebraicToXY = (algPosition) => {
  const x = algPosition.charAt(0);
  const y = parseInt(algPosition.charAt(1));

  return { x: algebraicMap[x], y: y };
};

const possibleMovements = [
  { x: +2, y: -1 },
  { x: +2, y: +1 },
  { x: -2, y: -1 },
  { x: -2, y: +1 },
  { x: +1, y: +2 },
  { x: +1, y: -2 },
  { x: -1, y: +2 },
  { x: -1, y: -2 },
];

const calcAllowedMovies = (startPosition, chessPiece) => {
  const allowedMoves = [];

  // starting from the current position, check if every new possible move ends in a valid position;
  for (let i = 0; i < possibleMovements.length; i++) {
    // calc new final position based on piece possible movements
    const targetNewPosition = {
      x: startPosition.x + possibleMovements[i].x,
      y: startPosition.y + possibleMovements[i].y,
    };

    // given a target new position, checks if that position belongs to the limits of the board
    const isValidNewPosition =
      targetNewPosition.x >= 1 &&
      targetNewPosition.x <= 8 &&
      targetNewPosition.y >= 1 &&
      targetNewPosition.y <= 8;

    if (isValidNewPosition) {
      allowedMoves.push(targetNewPosition);
    }
  }

  return allowedMoves;
};

router.get("/movements/:piece/:position", async (req, res) => {
  const { piece, position } = req.params;

  console.log("piece", piece);
  console.log("position", position);

  const startPosition = position;

  const startPositionXY = algebraicToXY(startPosition);

  let response = calcAllowedMovies(startPositionXY, piece);

  console.log("response", response);

  res.send(response);
});

module.exports = router;
