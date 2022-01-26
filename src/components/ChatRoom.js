import React, { useEffect, useRef, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth, firestore } from '../firebase/firebase';
import ChatMessage from './ChatMessage';

const ChatRoom = () => {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt');

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');

  const sendMessage = async e => {
    e.preventDefault();
    setFormValue('');

    const { uid, photoURL, displayName, email } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: new Date(),
      uid,
      photoURL,
      displayName,
      email
    });
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
          className="send-message"
        />

        <button type="submit" disabled={!formValue || !formValue.replace(/\s/g, '').length}>
          <img className="send-img" src="/send.png" alt="Send message." />
        </button>
      </form>
    </>
  );
};

export default ChatRoom;
