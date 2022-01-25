import React from 'react';
import { auth } from '../firebase/firebase';

const SignOut = () =>
  auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>
      Sign Out
    </button>
  );

export default SignOut;
