import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import createStyles from './NavBar.styles';

const NavBar = (props) => {
  const classes = createStyles(props);
  return (
    <AppBar position='fixed' className={classes.root}>
      <Toolbar>
        <Link to='/' className={classes.link}>
          <Typography className={classes.title} variant='h6' noWrap>
            Chess Challenge
          </Typography>
        </Link>
        <div className={classes.grow} />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
