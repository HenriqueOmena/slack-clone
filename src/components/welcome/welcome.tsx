import React from 'react';
import welcomeStyle from './welcome.styles';

const Welcome = () => {
  const classes = welcomeStyle();
  return (
    <div className={classes.container}>
      <h1>Welcome to clone Slack</h1>
      <h2 className={classes.space10}>Choose your channel at left side bar</h2>
      <p className={classes.space25}>
        I recommend click into <span className={classes.span}># youtube</span>{' '}
        if you wanna see some messages already sended for tests
      </p>
      <p>
        Or if you wanna u can{' '}
        <span className={classes.span}>+ Add Channel</span> and create a new
        channel
      </p>
    </div>
  );
};

export default Welcome;
