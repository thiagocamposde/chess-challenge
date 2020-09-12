import React, { useEffect, useState } from 'react';

import { getNextMovements } from '../../../api/chess.api';
import Square from '../../base/Square/Square.js';
import { isEven, isOdd } from '../../../shared/Helper.js';

const ChessBoard = ({ baseUrl, classes }) => {
  const [results, setResults] = useState([]);
  const [board, setBoard] = useState([]);

  const [allowedMoves, setAllowedMoves] = useState([]);

  useEffect(() => {
    createBoard();
  }, [allowedMoves]);

  useEffect(() => {
    setTimeout(function () {
      getNextAllowedMovements();
    }, 1000);
  }, []);

  const createBoard = () => {
    let board = [];

    for (let i = 0; i < 8; i++) {
      const row = [];
      for (let j = 0; j < 8; j++) {
        let color = '';
        const isAllowedMove =
          allowedMoves.filter((position) => {
            console.log('position', position);
            return position.x === i && position.y === j;
          }).length > 0;

        if (isAllowedMove) {
          color = 'nextMoveSquare';
        } else {
          color =
            (isEven(i) && isEven(j)) || (isOdd(i) && isOdd(j))
              ? 'lightSquare'
              : 'darkSquare';
        }
        row.push(<Square color={color} highLight={isAllowedMove} />);
      }
      board.push(row);
    }

    console.log('board', board);

    setBoard(board);
  };

  const getNextAllowedMovements = async () => {
    const response = await getNextMovements('knight', 'E4');
    console.log('response', response);
    setAllowedMoves(response.data);
  };

  return (
    <div className={classes.boardRoot}>
      {board.map((row) => {
        return row.map((square) => {
          return square;
        });
      })}
    </div>
  );
};

export default ChessBoard;
