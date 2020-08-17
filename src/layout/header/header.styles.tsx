import { makeStyles, createStyles } from '@material-ui/core/styles';

const headerStyles = makeStyles(theme =>
  createStyles({
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 0',
      backgroundColor: theme.palette.primary.main,
      color: 'white',
    },
    left: {
      flex: 0.3,
      display: 'flex',
      alignItems: 'center',
      marginLeft: 20,
    },
    second: {
      marginLeft: 'auto',
      marginRight: 30,
    },
    search: {
      flex: 0.4,
      backgroundColor: '#421f44',
      textAlign: 'center',
      display: 'flex',
      padding: '0 50px',
      color: 'gray',
      border: 'solid 1px gray',
      borderRadius: 6,
    },
    searchInput: {
      backgroundColor: 'transparent',
      color: 'gray',
      border: 'none',
      textAlign: 'center',
      minWidth: '35vw',
      '&:focus': {
        border: 'solid 1px red',
      },
    },
    right: {
      flex: 0.3,
      display: 'flex',
      alignItems: 'flex-end',
    },
    rightIcon: {
      marginLeft: 'auto',
      marginRight: 20,
    },
    avatar: {},
  })
);

export default headerStyles;
