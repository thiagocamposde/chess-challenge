const { algebraicToXY, xyToAlgebraic } = require('../shared/BoardHelper');

// Possiveis tentativas de movimentos do cavalo dado uma posição qualquer
const possibleMovements = [
  { x: +2, y: -1 },
  { x: +2, y: +1 },
  { x: -2, y: -1 },
  { x: -2, y: +1 },
  { x: +1, y: +2 },
  { x: +1, y: -2 },
  { x: -1, y: +2 },
  { x: -1, y: -2 }
];

class ChessService {
  /**
   * dado uma podição qualquer e uma peça, calcula os próximos
   * possíveis movimentos para aquela peça.
   * @param {string} startPositionAlg posição atual da peça (Ex.: A1)
   * @param {string} chessPiece identifica o tipo da peça (Ex.: knight)
   */
  calcAllowedMovies(startPositionAlg, chessPiece) {
    const startPosition = algebraicToXY(startPositionAlg);
    const allowedMoves = [];

    // a partir da posição atual, calcula os próximos possíveis movimentos
    for (let i = 0; i < possibleMovements.length; i++) {
      const targetNewPosition = {
        x: startPosition.x + possibleMovements[i].x,
        y: startPosition.y + possibleMovements[i].y
      };

      // verifica se está dentro dos limites do board
      const isValidNewPosition =
        targetNewPosition.x >= 1 &&
        targetNewPosition.x <= 8 &&
        targetNewPosition.y >= 1 &&
        targetNewPosition.y <= 8;

      if (isValidNewPosition) {
        allowedMoves.push(xyToAlgebraic(targetNewPosition));
      }
    }

    return allowedMoves;
  }
}

module.exports = ChessService;
