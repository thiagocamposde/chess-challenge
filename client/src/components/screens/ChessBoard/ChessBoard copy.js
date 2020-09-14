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
    console.log('aqui... 2');
  }, [board]);

  useEffect(() => {
    console.log('aqui... 1');
    createBoard();
  }, []);

  const createBoard = async () => {
    // let board = [];

    // for (let i = 0; i < 8; i++) {
    //   const row = [];
    //   for (let j = 0; j < 8; j++) {
    //     let color =
    //       (isEven(i) && isEven(j)) || (isOdd(i) && isOdd(j))
    //         ? 'lightSquare'
    //         : 'darkSquare';

    //     row.push(
    //       <Square key={i + j} color={color}>
    //         {' '}
    //         <div>{`${i + 10} , ${j}`}</div>
    //       </Square>
    //     );
    //   }

    //   board.push(row);
    // }

    // const randomPos = generateRandomPosition();
    // console.log('random', 'randomPos');

    // setKnightPosition(randomPos);

    // board[randomPos.x][randomPos.y] = (
    //   <Square key={randomPos.x + randomPos.y} color={'darkGray3'}>
    //     <div>{`${randomPos.x} , ${randomPos.y}`}</div>
    //   </Square>
    // );

    // const nextAllowedMovements = await fetchNextAllowedMovements(
    //   'knight',
    //   randomPos
    // );

    // nextAllowedMovements.forEach((position) => {
    //   const xyPos = algebraicToXY(position);

    //   console.log('xyPos', xyPos);
    //   board[xyPos.x][xyPos.y] = (
    //     <Square key={xyPos.x + xyPos.y} color={'nextMoveSquare'} />
    //   );
    // });

    // setBoard(board);
    let board = [];

    const randomPos = Object.keys(board2)[Math.floor(Math.random() * 64)];
    console.log('random', 'randomPos');

    setKnightPosition('A1');

    board2[randomPos].color = 'darkGray3';

    const nextAllowedMovements = await fetchNextAllowedMovements(
      'knight',
      randomPos
    );

    nextAllowedMovements.forEach((allowedMove) => {
      console.log('allowedMove', allowedMove);
      board2[allowedMove].color = 'nextMoveSquare';
    });

    setBoard(board);
  };

  // const fetchNextAllowedMovements = async (piece, positionXY) => {
  //   const position = xyToAlgebraic(positionXY);
  //   console.log('position algebric', position);
  //   const response = await getNextMovements(piece, position);
  //   console.log('response', response.data);
  //   return response.data;
  //   // setAllowedMoves(response.data);
  // };
  const fetchNextAllowedMovements = async (piece, pos) => {
    console.log('position algebric', pos);
    const response = await getNextMovements(piece, pos);
    console.log('response', response.data);
    return response.data;
    // setAllowedMoves(response.data);
  };

  return (
    <div className={classes.boardRoot}>
      {/* {board.map((row) => {
        return row.map((square) => {
          return square;
        });
      })} */}
      {Object.keys(board2).map((key) => {
        const position = board2[key];

        return <Square color={position.color} />;
      })}
    </div>
  );
};

export default ChessBoard;
