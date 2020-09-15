import { withStyles } from '@material-ui/styles';
import ChessBoard from './ChessBoard';

const styles = (theme) => {
  return {
    chessBoardRoot: {
      width: '700px'
    },
    board: {
      display: 'grid',
      gridTemplateColumns: 'repeat(8, 70px)',
      gridTemplateRows: 'repeat(8, 70px)',
      gridColumnGap: 0,
      gridRowGap: 0
    },
    middleContent: {
      display: 'flex'
    }
  };
};

export default withStyles(styles)(ChessBoard);
