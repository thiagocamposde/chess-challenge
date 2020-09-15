import React from 'react';
import { LETTERS_POS, NUMBERS_POS } from '../../../shared/Constants';
import PropTypes from 'prop-types';
import createStyles from './CoordinatorBorder.styles';

const CoordinatorBorder = (props) => {
  const classes = createStyles(props);
  const { orientation, ...rest } = props;

  return orientation === 'horizontal' ? (
    <div className={classes.borderHorizontal} {...rest}>
      {LETTERS_POS.map((letter) => {
        return <span className={classes.coordinator}>{letter}</span>;
      })}
    </div>
  ) : (
    <div className={classes.borderVertical} {...rest}>
      {NUMBERS_POS.map((letter) => {
        return <span className={classes.coordinator}>{letter}</span>;
      })}
    </div>
  );
};

CoordinatorBorder.propTypes = {
  /** Define se a borda será vertical (1-8)
   * ou horiztal (A-H).
   */
  orientation: PropTypes.string.isRequired,

  /** Qualquer outras props recebedias serão
   * passadas adiante para o elemento raiz
   */
  rest: PropTypes.object
};

export default CoordinatorBorder;
