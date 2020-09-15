import React from 'react';
import { LETTERS_POS, NUMBERS_POS } from '../../../shared/Constants';
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

export default CoordinatorBorder;
