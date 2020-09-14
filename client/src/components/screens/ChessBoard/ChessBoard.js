import React, { useEffect, useState } from 'react';
import { getNextMovements } from '../../../api/chess.api';
import Square from '../../base/Square/Square.js';

const ChessBoard = ({ baseUrl, classes }) => {
  const [results, setResults] = useState([]);
  const [board, setBoard] = useState([]);
  const [knightPosition, setKnightPosition] = useState(null);
  const [allowedMoves, setAllowedMoves] = useState([]);
  const [board2, setBoard2] = useState({
    A1: { color: 'lightSquare' },
    A2: { color: 'darkSquare' },
    A3: { color: 'lightSquare' },
    A4: { color: 'darkSquare' },
    A5: { color: 'lightSquare' },
    A6: { color: 'darkSquare' },
    A7: { color: 'lightSquare' },
    A8: { color: 'darkSquare' },
    B1: { color: 'darkSquare' },
    B2: { color: 'lightSquare' },
    B3: { color: 'darkSquare' },
    B4: { color: 'lightSquare' },
    B5: { color: 'darkSquare' },
    B6: { color: 'lightSquare' },
    B7: { color: 'darkSquare' },
    B8: { color: 'lightSquare' },
    C1: { color: 'lightSquare' },
    C2: { color: 'darkSquare' },
    C3: { color: 'lightSquare' },
    C4: { color: 'darkSquare' },
    C5: { color: 'lightSquare' },
    C6: { color: 'darkSquare' },
    C7: { color: 'lightSquare' },
    C8: { color: 'darkSquare' },
    D1: { color: 'darkSquare' },
    D2: { color: 'lightSquare' },
    D3: { color: 'darkSquare' },
    D4: { color: 'lightSquare' },
    D5: { color: 'darkSquare' },
    D6: { color: 'lightSquare' },
    D7: { color: 'darkSquare' },
    D8: { color: 'lightSquare' },
    E1: { color: 'lightSquare' },
    E2: { color: 'darkSquare' },
    E3: { color: 'lightSquare' },
    E4: { color: 'darkSquare' },
    E5: { color: 'lightSquare' },
    E6: { color: 'darkSquare' },
    E7: { color: 'lightSquare' },
    E8: { color: 'darkSquare' },
    F1: { color: 'darkSquare' },
    F2: { color: 'lightSquare' },
    F3: { color: 'darkSquare' },
    F4: { color: 'lightSquare' },
    F5: { color: 'darkSquare' },
    F6: { color: 'lightSquare' },
    F7: { color: 'darkSquare' },
    F8: { color: 'lightSquare' },
    G1: { color: 'lightSquare' },
    G2: { color: 'darkSquare' },
    G3: { color: 'lightSquare' },
    G4: { color: 'darkSquare' },
    G5: { color: 'lightSquare' },
    G6: { color: 'darkSquare' },
    G7: { color: 'lightSquare' },
    G8: { color: 'darkSquare' },
    H1: { color: 'darkSquare' },
    H2: { color: 'lightSquare' },
    H3: { color: 'darkSquare' },
    H4: { color: 'lightSquare' },
    H5: { color: 'darkSquare' },
    H6: { color: 'lightSquare' },
    H7: { color: 'darkSquare' },
    H8: { color: 'lightSquare' }
  });

  useEffect(() => {
    console.log('useEffect... 1');
    createBoard();
  }, []);

  const createBoard = async () => {
    let boardCopy = { ...board2 };

    const randomPos = Object.keys(boardCopy)[Math.floor(Math.random() * 64)];
    console.log('random', 'randomPos');

    setKnightPosition(randomPos);
    boardCopy[randomPos].piece = 'knight';

    const nextAllowedMovements = await fetchNextAllowedMovements(
      'knight',
      randomPos
    );

    nextAllowedMovements.forEach((allowedMove) => {
      console.log('allowedMove', allowedMove);
      boardCopy[allowedMove].isNextMove = true;
    });

    setBoard(boardCopy);
    setAllowedMoves(nextAllowedMovements);
  };

  const fetchNextAllowedMovements = async (piece, pos) => {
    console.log('position algebric', pos);
    const response = await getNextMovements(piece, pos);
    console.log('response', response.data);
    return response.data;
    // setAllowedMoves(response.data);
  };

  const handleSquareClick = async (position, square) => {
    console.log('position', position);
    console.log('square', square);
    if (square.isNextMove) {
      const boardCopy = { ...board2 };
      boardCopy[knightPosition].piece = null;
      boardCopy[position].piece = 'knight';
      setKnightPosition(position);

      allowedMoves.forEach((position) => {
        boardCopy[position].isNextMove = false;
      });
      const nextAllowedMovements = await fetchNextAllowedMovements(
        'knight',
        position
      );

      setAllowedMoves(nextAllowedMovements);

      nextAllowedMovements.forEach((allowedMove) => {
        console.log('allowedMove', allowedMove);
        boardCopy[allowedMove].isNextMove = true;
      });
      setBoard2(boardCopy);
    }
  };

  return (
    <div className={classes.boardRoot}>
      {Object.keys(board2).map((key) => {
        const square = board2[key];
        console.log('render');
        console.log('square', square);
        return (
          <Square
            onClick={() => handleSquareClick(key, board2[key])}
            color={square.color}
            piece={square.piece}
            isNextMove={square.isNextMove}
          />
        );
      })}
    </div>
  );
};

export default ChessBoard;
