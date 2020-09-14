import React, { Children } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import knightIcon from '../../../assets/knight.png';
import createStyles from './Square.styles';

const Square = (props) => {
  const classes = createStyles(props);
  const { piece, ...rest } = props;

  return (
    <div className={classes.rootSquare} {...rest}>
      {piece && <img className={classes.pieceImg} src={knightIcon} />}
    </div>
  );
};

export default Square;
