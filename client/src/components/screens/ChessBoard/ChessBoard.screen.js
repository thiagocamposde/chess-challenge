import React, { useEffect, useState } from 'react';
import { getNextMovements } from '../../../api/chess.api';
import CoordinatorBorder from '../../base/CoordinatorBorder/CoordinatorBorder.js';
import Square from '../../base/Square/Square.js';
import { defaultBoard } from '../../../shared/BoardHelper.js';
import PropTypes from 'prop-types';
import createStyles from './ChessBoard.styles';
import _ from 'lodash';

const ChessBoard = (props) => {
  const [board, setBoard] = useState({});
  const classes = createStyles(props);

  useEffect(() => {
    createBoard();
  }, []);

  const createBoard = async () => {
    let newBoard = _.cloneDeep(defaultBoard);

    const randomPosition = Object.keys(newBoard)[
      Math.floor(Math.random() * 64)
    ];

    newBoard[randomPosition].piece = 'knight';

    const nextMoves = await fetchAllowedMovements('knight', randomPosition);

    if (nextMoves) {
      nextMoves.forEach((allowedMove) => {
        newBoard[allowedMove].isNextMove = true;
      });
    }

    setBoard(newBoard);
  };

  const fetchAllowedMovements = async (piece, pos) => {
    try {
      const response = await getNextMovements(piece, pos);
      return response.data;
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSquareClick = async (position, square) => {
    if (square.isNextMove) {
      const newBoard = _.cloneDeep(defaultBoard);

      newBoard[position].piece = 'knight';

      const nextMoves = await fetchAllowedMovements('knight', position);

      if (nextMoves) {
        nextMoves.forEach((position) => {
          newBoard[position].isNextMove = true;
        });
      }
      setBoard(newBoard);
    }
  };

  return (
    <div className={classes.chessBoardRoot}>
      <CoordinatorBorder orientation='horizontal' />
      <div className={classes.middleContent}>
        <CoordinatorBorder orientation='vertical' />
        <div className={classes.board}>
          {Object.keys(board).map((key) => {
            const square = board[key];
            return (
              <Square
                onClick={() => handleSquareClick(key, board[key])}
                color={square.color}
                piece={square.piece}
                isNextMove={square.isNextMove}
              />
            );
          })}
        </div>
        <CoordinatorBorder orientation='vertical' />
      </div>
      <CoordinatorBorder orientation='horizontal' />
    </div>
  );
};

ChessBoard.propTypes = {};

export default ChessBoard;
