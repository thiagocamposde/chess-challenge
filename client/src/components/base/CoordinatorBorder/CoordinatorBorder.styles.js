import { makeStyles } from '@material-ui/core/styles';

const createStyles = makeStyles((theme) => ({
  borderHorizontal: {
    height: '70px',
    width: '100%',
    backgroundColor: '#1E1A1D',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 70px',
    boxSizing: 'border-box'
  },
  borderVertical: {
    height: '560px',
    width: '70px',
    backgroundColor: '#1E1A1D',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box'
  },
  coordinator: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    color: '#8d775f',
    fontSize: '18px'
  }
}));

export default createStyles;
