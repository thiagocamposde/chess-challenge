import { makeStyles } from '@material-ui/core/styles';

const createStyles = makeStyles((theme) => {
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
});

export default createStyles;
