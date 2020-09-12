import React from 'react';
import ChessBoard from '../ChessBoard/ChessBoard.styles';
import { Switch, Route } from 'react-router-dom';

const MainsScreen = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Switch>
        <Route exact path='/' render={(props) => <ChessBoard {...props} />} />
      </Switch>
    </div>
  );
};

export default MainsScreen;
