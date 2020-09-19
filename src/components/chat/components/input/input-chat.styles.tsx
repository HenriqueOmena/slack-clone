import { makeStyles, createStyles } from '@material-ui/core';

const inputStyle = makeStyles(theme =>
  createStyles({
    chatInput: {
      border: 'solid 1px red',
    },
  })
);

export default inputStyle;
