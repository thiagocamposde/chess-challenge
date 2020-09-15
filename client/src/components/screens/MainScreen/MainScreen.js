import React from 'react';
import ChessBoard from '../ChessBoard/ChessBoard.screen.js';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import createStyles from './MainScreen.styles';

const MainsScreen = (props) => {
  const classes = createStyles(props);

  return (
    <div className={classes.root} {...props}>
      <Switch>
        <Route exact path='/' render={(props) => <ChessBoard {...props} />} />
      </Switch>
    </div>
  );
};

MainsScreen.prototype = {
  props: PropTypes.object
};

export default MainsScreen;
