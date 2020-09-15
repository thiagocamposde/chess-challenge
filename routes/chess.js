const ChessController = require('../controllers/chessController');
const express = require('express');

const router = express.Router();

router.get(
  '/movements/:piece/:position',
  ChessController.validate('nextValidMovements'),
  ChessController.calcAllowedMoves
);

module.exports = router;
