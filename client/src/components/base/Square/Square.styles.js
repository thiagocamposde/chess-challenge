import { makeStyles } from '@material-ui/core/styles';

const createStyles = makeStyles((theme) => ({
  rootSquare: {
    backgroundColor: ({ isNextMove, color }) => {
      if (isNextMove) {
        return theme.colors.nextMove;
      } else {
        return color ? theme.colors[color] : 'none';
      }
    }
  },
  pieceImg: {
    width: '100%',
    padding: '5px',
    boxSizing: 'border-box'
  }
}));

export default createStyles;
