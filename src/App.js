import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/firebase';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import ChatRoom from './components/ChatRoom';
import './App.css';

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>BossElijah's chat</h1>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
