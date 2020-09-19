import React, { useState, useEffect } from 'react';
import db from 'firebaseConfig';
import { useParams } from 'react-router-dom';
import messageStyle from './messages.style';

export interface MessageI {
  message: string;
  date: { seconds: number; nanoseconds: number; toDate: () => string };
  userName: string;
  userImage: string;
}

const Messages: React.FC = () => {
  const { container, messageInfo, avatarImg, dateInfo } = messageStyle();
  const { idChannel } = useParams();
  // TODO: Fix Types for this state
  const [channelMessages, setChannelMessages] = useState<any>([]);

  useEffect(() => {
    db.collection('channels')
      .doc(idChannel)
      .collection('messages')
      .orderBy('date', 'asc')
      .onSnapshot(snapshot =>
        setChannelMessages(snapshot.docs.map(doc => doc.data()))
      );
  }, [idChannel]);

  return channelMessages.map(
    ({ message, date, userName, userImage }: MessageI, index: number) => (
      <div className={container} key={index}>
        <img src={userImage} alt="" className={avatarImg} />
        <div className={messageInfo}>
          <h4>
            {userName}{' '}
            <span className={dateInfo}>
              {new Date(date?.toDate()).toUTCString()}
            </span>
          </h4>
          <p>{message}</p>
        </div>
      </div>
    )
  );
};

export default Messages;
