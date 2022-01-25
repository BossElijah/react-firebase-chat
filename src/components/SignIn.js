import React from 'react';
import firebase from 'firebase/app';
import { auth } from '../firebase/firebase';

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  const handleEmailSubmit = e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    auth.signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="login-page">
      <form onSubmit={handleEmailSubmit} id="login-email">
        <h2
          style={{
            color: '#fff',
            fontSize: '2.5rem',
            margin: '0',
            marginBottom: '1rem'
          }}
        >
          Login
        </h2>
        <p>
          If you don't have an account,&nbsp;
          <a
            style={{
              color: 'inherit'
            }}
            href="mailto:eliasbruhn123@gmail.com?subject=Regarding new account on BossElijah's chat&body=Hello BossElijah's chat team, %0D%0A %0D%0A I would like to request a new account for https://bosselijah-chat.netlify.com %0D%0A %0D%0A My email address is: ……………… %0D%0A I want my password to be: ………………"
          >
            contact me
          </a>
          .
        </p>
        <p
          style={{
            marginBottom: '1rem',
            opacity: '0'
          }}
        >
          Or login with{' '}
          <span
            onClick={signInWithGoogle}
            style={{
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignIn;
