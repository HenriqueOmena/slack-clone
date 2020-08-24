import { makeStyles, createStyles } from '@material-ui/core';

const loginStyle = makeStyles(theme =>
  createStyles({
    container: {
      border: 'solid 1px red',
    },
  })
);
export default loginStyle;
