import { format, fromUnixTime } from 'date-fns';
import React from 'react';
import { auth } from '../firebase/firebase';
import { findDisplayName, findImgUrl } from '../utility/functions';

const ChatMessage = props => {
  const { text, uid, photoURL, displayName, email, createdAt } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <>
      <div className={`message ${messageClass}`}>
        <div className="message-container">
          <div className="author-details">
            <img src={findImgUrl(photoURL, email)} alt="Profile pic" />
            <span
              style={{
                color: 'white'
              }}
            >
              {findDisplayName(displayName, email)}
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
