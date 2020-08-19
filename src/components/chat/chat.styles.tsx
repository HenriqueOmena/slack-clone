import { makeStyles, createStyles } from '@material-ui/core';

const chatStyle = makeStyles(theme =>
  createStyles({
    chat: {
      border: 'solid 1px red',
      flex: 0.7,
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 20,
      borderBottom: '1px solid lightgray',
    },
    headerLeft: {},
    channelName: {
      textTransform: 'lowercase',
    },
    headerRight: {},
  })
);

export default chatStyle;
