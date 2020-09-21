import { createStyles, makeStyles } from '@material-ui/core';

const sideBarStyle = makeStyles(theme =>
  createStyles({
    sidebar: {
      borderTop: `1px solid ${theme.palette.primary.light}`,
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      maxWidth: 260,
      height: '93vh',
    },
    header: {
      display: 'flex',
      borderBottom: `1px solid ${theme.palette.primary.light}`,
      padding: 13,
      paddingBottom: 10,
    },
    info: {
      flex: 1,
    },
    titleH2: {
      fontSize: 15,
      fontWeight: 900,
      marginBottom: 5,
    },
    titleH3: {
      display: 'flex',
      alignItems: 'center',
      fontSize: 13,
      fontWeight: 400,
      marginBottom: 5,
    },
    iconName: {
      fontSize: 14,
      marginRight: 2,
      color: 'green',
    },
    iconCreate: {
      padding: 3,
      color: theme.palette.primary.main,
      fontSize: 20,
      backgroundColor: 'white',
      borderRadius: 999,
    },
    hr: {
      margin: '10px 0',
      border: `solid 1px ${theme.palette.primary.light}`,
    },
  })
);

export default sideBarStyle;
