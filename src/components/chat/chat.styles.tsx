import { makeStyles, createStyles } from '@material-ui/core';

const chatStyle = makeStyles(() =>
  createStyles({
    chat: {
      flex: 0.7,
      flexGrow: 1,
      overflowY: 'scroll',
      paddingBottom: 150,
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
      display: 'flex',
      textTransform: 'lowercase',
    },
    headerRight: {
      display: 'flex',
      alignItems: 'center',
      fontSize: 14,
    },
    starIcon: {
      marginLeft: 10,
      fontSize: 18,
    },
    infoIcon: {
      marginRight: 5,
      fontSize: 16,
    },
    chatMessages: {},
  })
);

export default chatStyle;
