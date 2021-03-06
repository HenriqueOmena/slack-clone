import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { auth, provider } from 'firebaseConfig';
import Context from 'store/config/config';
import { LogInUser } from 'store/auth';
import loginStyle from './login.styles';

const Login = () => {
  const { container, logoSlack, wrapperLogin, button } = loginStyle();
  const { dispatch } = useContext(Context);

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        dispatch(LogInUser(result.user));
      })
      .catch(error => console.error('====>>>>', error.message));
  };

  return (
    <div className={container}>
      <div className={wrapperLogin}>
        <img
          src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
          alt="Slack"
          className={logoSlack}
        />
        <h1> Signin on Omena Slack Clone </h1>
        <p>
          <strong>created by :</strong>{' '}
          <a href="https://www.henriqueomena.com/">www.henriqueomena.com</a>
        </p>
        <Button
          variant="outlined"
          color="primary"
          onClick={signIn}
          className={button}
        >
          Sign In with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
