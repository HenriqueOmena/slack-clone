import { createStyles, makeStyles } from '@material-ui/core';

const sidebarOptionStyle = makeStyles(theme =>
  createStyles({
    sidebarOption: {
      display: 'flex',
      alignItems: 'center',
      fontSize: 12,
      paddingLeft: 2,
      cursor: 'pointer',
      '&:hover': {
        opacity: 0.9,
        backgroundColor: theme.palette.primary.dark,
      },
    },
    icon: {
      padding: 10,
      fontSize: 35,
    },
    hash: {
      padding: 10,
    },
    channel: {
      padding: 10,
      fontWeight: 500,
    },
  })
);

export default sidebarOptionStyle;
