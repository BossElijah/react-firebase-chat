import { format, fromUnixTime } from 'date-fns';
import React from 'react';
import { auth } from '../firebase/firebase';

const ChatMessage = props => {
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
      return 'Joffy';
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
};

export default ChatMessage;
