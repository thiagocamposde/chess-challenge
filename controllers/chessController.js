const { VALID_POSITIONS, VALID_PIECES } = require('../shared/Constants');
const { check, validationResult } = require('express-validator');
const ChessService = require('../services/chessService');
const chessService = new ChessService();

exports.calcAllowedMoves = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  } else {
    const { piece, position } = req.params;
    let response = chessService.calcAllowedMovies(position, piece);
    res.send(response);
  }
};

exports.validate = (method) => {
  switch (method) {
    case 'nextValidMovements': {
      return [
        check('position').custom((value) => {
          if (value && VALID_POSITIONS.includes(value)) {
            return true;
          } else {
            throw new Error('Posição inválida');
          }
        }),
        check('piece').custom((value) => {
          if (value && VALID_PIECES.includes(value)) {
            return true;
          } else {
            throw new Error('Peça inválida');
          }
        })
      ];
    }
  }
};
