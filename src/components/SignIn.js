import React, { useState } from 'react';
import firebase from 'firebase/app';
import { auth } from '../firebase/firebase';

const SignIn = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [errorCode, setErrorCode] = useState('');

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  const handleEmailSubmit = e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {})
      .catch(error => {
        setErrorCode(error.code);
        setErrorMessage(error.message);

        setTimeout(() => {
          setErrorMessage('');
          setErrorCode('');
        }, 5000);
      });
  };

  return (
    <div className="login-page">
      <form onSubmit={handleEmailSubmit} id="login-email">
        <h2>Login</h2>
        <p>
          If you don't have an account,&nbsp;
          <a href="mailto:eliasbruhn123@gmail.com?subject=Regarding new account on BossElijah's chat&body=Hello BossElijah's chat team, %0D%0A %0D%0A I would like to request a new account for https://bosselijah-chat.netlify.com %0D%0A %0D%0A My email address is: ……………… %0D%0A I want my password to be: ………………">
            contact me
          </a>
          .
        </p>
        <p className="sign-in-google">
          Or login with{' '}
          <span className="google-span" onClick={signInWithGoogle}>
            Google
          </span>
        </p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="email@example.com…" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Your secret password…"
        />
        <div className="error-messages">
          {errorCode}
          <br />
          {errorMessage}
        </div>
        <button className="sign-in" type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignIn;
