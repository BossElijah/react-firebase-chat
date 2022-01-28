import { format, fromUnixTime } from 'date-fns';
import React from 'react';
import { auth } from '../firebase/firebase';
import { findDisplayName, findImgUrl } from '../utility/functions';
import Tooltip from './Tooltip';

const ChatMessage = (props) => {
  const { text, uid, photoURL, displayName, email, createdAt } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <>
      <div className={`message ${messageClass}`}>
        <div className="author-details">
          <img className="author-img" src={findImgUrl(photoURL, email)} alt="Profile pic" />
          <span className="display-name">
            {findDisplayName(displayName, email)} —{' '}
            {format(fromUnixTime(createdAt?.seconds), 'HH:mm')}
          </span>
        </div>
        <Tooltip date={createdAt?.seconds} text={text} />
      </div>
    </>
  );
};

export default ChatMessage;
