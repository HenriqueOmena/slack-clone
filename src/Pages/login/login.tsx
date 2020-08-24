import React from 'react';
import { Button } from '@material-ui/core';
import { auth, provider } from 'firebaseConfig';
import loginStyle from './login.styles';

const Login = () => {
  const { container } = loginStyle();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(result => console.log(result))
      .catch(error => console.error('====>>>>', error.message));
  };
  return (
    <div className={container}>
      <div className="wrapperLogin">
        <h1> Signin on Omena Clone Slack</h1>
        <p>www.henriqueomena.com</p>
        <Button variant="outlined" color="default" onClick={signIn}>
          Sign In with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
