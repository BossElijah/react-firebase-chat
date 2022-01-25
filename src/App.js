import React, { useEffect, useRef, useState } from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { format, fromUnixTime } from 'date-fns';

firebase.initializeApp({
  apiKey: 'AIzaSyCEEK7yo4xy5lMIH8z8WZ9dWCYWdfnF2cE',
  authDomain: 'super-chat-a26c5.firebaseapp.com',
  projectId: 'super-chat-a26c5',
  storageBucket: 'super-chat-a26c5.appspot.com',
  messagingSenderId: '580013714016',
  appId: '1:580013714016:web:a94b431e4e9b237956b105',
  measurementId: 'G-57LEVEDDQB'
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
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

function SignIn() {
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
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt');

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');

  const sendMessage = async e => {
    e.preventDefault();

    const { uid, photoURL, displayName, email } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: new Date(),
      uid,
      photoURL,
      displayName,
      email
    });

    setFormValue('');
  };

  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <>
      <main>
        {messages &&
          messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage} className="send-message-form">
        <input
          value={formValue}
          onChange={e => setFormValue(e.target.value)}
          placeholder="Write something…"
        />

        <button type="submit" disabled={!formValue}>
          SEND
        </button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL, displayName, email, createdAt } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  const findImgUrl = () => {
    if (photoURL) {
      return photoURL;
    } else if (email === 'elias@lfpost.dk') {
      return 'https://bosselijah-chat.netlify.app/logo.png';
    } else if (email === 'admin@example.com') {
      return 'https://www.logolynx.com/images/logolynx/s_23/23938578fb8d88c02bc59906d12230f3.png';
    } else {
      return 'https://www.w3schools.com/howto/img_avatar.png';
    }
  };

  const findDisplayName = () => {
    if (displayName) {
      return displayName;
    } else if (email === 'elias@lfpost.dk') {
      return 'Elias';
    } else if (email === 'simeon@lfpost.dk') {
      return 'Symy';
    } else if (email === 'admin@example.com') {
      return 'Site admin';
    } else if (email === 'nathanael@lfpost.dk') {
      return 'Natha';
    } else if (email === 'joseph@lfpost.dk') {
      return 'Joffy'
    } else if (email) {
      return email;
    } else {
      return 'Anonymous';
    }
  };

  return (
    <>
      <div className={`message ${messageClass}`}>
        <div className="message-container">
          <div className="author-details">
            <img src={findImgUrl()} alt="Profile pic" />
            <span
              style={{
                color: 'white'
              }}
            >
              {findDisplayName()}
            </span>
          </div>
          <span className="time">
            {format(fromUnixTime(createdAt?.seconds), 'dd/MM/yyyy — HH:mm:ss')}
          </span>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}

export default App;
