import React, { useEffect, useState } from 'react';

import { getNextMovements } from '../../../api/chess.api';
import Square from '../../base/Square/Square.js';
import { isEven, isOdd } from '../../../shared/MathHelper.js';
import {
  generateRandomPosition,
  xyToAlgebraic,
  algebraicToXY
} from '../../../shared/BoardHelper.js';

const ChessBoard = ({ baseUrl, classes }) => {
  const [results, setResults] = useState([]);
  const [board, setBoard] = useState([]);
  const [knightPosition, setKnightPosition] = useState(null);
  const [allowedMoves, setAllowedMoves] = useState([]);

  useEffect(() => {
    console.log('aqui... 2');
  }, [board]);

  useEffect(() => {
    console.log('aqui... 1');
    createBoard();
  }, []);

  const createBoard = async () => {
    let board = [];

    for (let i = 0; i < 8; i++) {
      const row = [];
      for (let j = 0; j < 8; j++) {
        let color = '';
        // const isAllowedMove =
        //   allowedMoves.filter((position) => {
        //     return position.x === i && position.y === j;
        //   }).length > 0;

        // const piece =
        //   allowedMoves.filter((position) => {
        //     return position.x === i && position.y === j;
        //   }).length > 0;

        color =
          (isEven(i) && isEven(j)) || (isOdd(i) && isOdd(j))
            ? 'lightSquare'
            : 'darkSquare';

        // if (isAllowedMove) {
        //   color = 'nextMoveSquare';
        // } else {
        //   color =
        //     (isEven(i) && isEven(j)) || (isOdd(i) && isOdd(j))
        //       ? 'lightSquare'
        //       : 'darkSquare';
        // }
        // row.push(<Square color={color} highLight={isAllowedMove} />);
        row.push(
          <Square key={i + j} color={color}>
            {' '}
            <div>{`${i + 10} , ${j}`}</div>
          </Square>
        );
      }

      board.push(row);
    }

    const randomPos = generateRandomPosition();
    console.log('random', randomPos);

    setKnightPosition(randomPos);

    board[randomPos.x][randomPos.y] = (
      <Square key={randomPos.x + randomPos.y} color={'darkGray3'}>
        <div>{`${randomPos.x} , ${randomPos.y}`}</div>
      </Square>
    );

    const nextAllowedMovements = await fetchNextAllowedMovements(
      'knight',
      randomPos
    );

    nextAllowedMovements.forEach((position) => {
      const xyPos = algebraicToXY(position);

      console.log('xyPos', xyPos);
      board[xyPos.x][xyPos.y] = (
        <Square key={xyPos.x + xyPos.y} color={'nextMoveSquare'} />
      );
    });

    setBoard(board);
  };

  const fetchNextAllowedMovements = async (piece, positionXY) => {
    const position = xyToAlgebraic(positionXY);
    console.log('position algebric', position);
    const response = await getNextMovements(piece, position);
    console.log('response', response.data);
    return response.data;
    // setAllowedMoves(response.data);
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
