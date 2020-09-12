import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import createStyles from './Square.styles';

const Square = (props) => {
  const classes = createStyles(props);

  return <div className={classes.rootSquare}></div>;
};

export default Square;
