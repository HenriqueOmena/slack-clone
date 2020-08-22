import { makeStyles, createStyles } from '@material-ui/core';

const messagesStyle = makeStyles(theme =>
  createStyles({
    container: { border: 'solid 1px red' },
    messageInfo: {
      border: 'solid 1px blue',
    },
  })
);

export default messagesStyle;
