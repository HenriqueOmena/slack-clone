import { makeStyles, createStyles } from '@material-ui/core';

const AppStyle = makeStyles(() =>
  createStyles({
    content: {
      border: 'solid 1px blue',
      display: 'flex',
    },
  })
);

export default AppStyle;
