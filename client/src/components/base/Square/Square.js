import React, { Children } from 'react';
import knightIcon from '../../../assets/knight.png';
import PropTypes from 'prop-types';

import createStyles from './Square.styles';

const Square = (props) => {
  const { isNextMove, color, piece, ...rest } = props;
  const classes = createStyles({ isNextMove, color });

  return (
    <div className={classes.rootSquare} {...rest}>
      {piece && <img className={classes.pieceImg} src={knightIcon} />}
    </div>
  );
};

Square.propTypes = {
  /** Indica se essa é uma posição
   * possível para próxima jogada
   */
  isNextMove: PropTypes.bool,

  /** Representa a cor default da posição */
  color: PropTypes.string.isRequired,

  /** Indica se existe uma peça nessa posição */
  piece: PropTypes.string,

  /**
   * Qualquer outra props será passada adiante para o elemento
   * raiz do componente
   */
  rest: PropTypes.object
};

export default Square;
