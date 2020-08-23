import { makeStyles, createStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const messagesStyle = makeStyles(theme =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: ' center',
      padding: 20,
    },
    messageInfo: {
      padding: 10,
    },
    avatarImg: {
      height: 50,
      width: 50,
      objectFit: 'contain',
    },
    dateInfo: {
      color: grey[500],
      fontSize: 12,
      fontWeight: 200,
    },
  })
);

export default messagesStyle;
