import { createStyles, makeStyles } from '@material-ui/core';

const sideBarStyle = makeStyles(theme =>
  createStyles({
    sidebar: {
      borderTop: `1px solid ${theme.palette.primary.light}`,
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      maxWidth: 260,
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
    iconCreate: {
      padding: 8,
      color: theme.palette.primary.main,
      fontSize: 18,
      backgroundColor: 'white',
      borderRadius: 999,
    },
  })
);

export default sideBarStyle;
