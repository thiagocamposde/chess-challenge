import { makeStyles } from '@material-ui/core/styles';

const createStyles = makeStyles((theme) => ({
  rootSquare: {
    backgroundColor: (props) =>
      props.color ? theme.colors[props.color] : 'none'
  }
}));

export default createStyles;
