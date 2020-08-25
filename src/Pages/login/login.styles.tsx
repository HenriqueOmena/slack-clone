import { makeStyles, createStyles } from '@material-ui/core';

const loginStyle = makeStyles(theme =>
  createStyles({
    container: {
      height: '100vh',
      textAlign: 'center',
      display: 'grid',
      placeItems: 'center',
      backgroundColor: '#f8f8f8',
    },
    wrapperLogin: {
      padding: 100,
      backgroundColor: 'white',
      boxShadow: '0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24)',
    },
    logoSlack: {
      height: 100,
      objectFit: 'contain',
      marginBottom: 40,
      borderRadius: 10,
    },
    button: {
      marginTop: 40,
    },
  })
);
export default loginStyle;
