import { makeStyles, createStyles } from '@material-ui/core';
import { relative } from 'path';

const inputStyle = makeStyles(theme =>
  createStyles({
    container: {
      borderRadius: 20,
    },
    chatForm: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
    },
    inputText: {
      position: 'fixed',
      bottom: 30,
      width: '60%',
      border: 'solid 1px gray',
      borderRadius: 3,
      padding: 20,
    },
    displayNone: {
      display: 'none',
    },
  })
);

export default inputStyle;
