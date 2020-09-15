const ChessService = require('../../services/chessService');
const chessService = new ChessService();

describe('calcAllowedMoves()', () => {
  it('should return an array with with C2 and B3', () => {
    expect(chessService.calcAllowedMoves('A1', 'knight')).toEqual(['C2', 'B3']);
  });
});
