import { makeStyles, createStyles } from '@material-ui/core';

const welcomeStyle = makeStyles(() =>
  createStyles({
    container: {
      width: '100%',
      textAlign: 'center',
      paddingTop: 80,
    },
    span: {
      backgroundColor: '#49274b',
      color: 'white',
      padding: '3px 8px',
    },
    space25: {
      marginBottom: 10,
    },
    space10: {
      marginBottom: 15,
    },
  })
);
export default welcomeStyle;
