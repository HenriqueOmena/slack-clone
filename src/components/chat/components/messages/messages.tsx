import React, { useState, useEffect, useRef } from 'react';
import db from 'firebaseConfig';
import { useParams } from 'react-router-dom';
import messageStyle from './messages.style';

export interface MessageI {
  message: string;
  date: { seconds: number; nanoseconds: number; toDate: () => string };
  userName: string;
  userImage: string;
}

type Messages = firebase.firestore.DocumentData;

const Messages: React.FC = () => {
  const { container, messageInfo, avatarImg, dateInfo } = messageStyle();
  const { idChannel } = useParams();
  const [channelMessages, setChannelMessages] = useState<Messages>([]);
  const divContainerRef = useRef<HTMLDivElement>(null);
  const scrollToRef = () => {
    if (divContainerRef.current) {
      divContainerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  useEffect(() => {
    db.collection('channels')
      .doc(idChannel)
      .collection('messages')
      .orderBy('date', 'asc')
      .onSnapshot(snapshot =>
        setChannelMessages(snapshot.docs.map(doc => doc.data()))
      );
  }, [idChannel]);
  scrollToRef();
  return channelMessages.map(
    ({ message, date, userName, userImage }: MessageI, index: number) => (
      <div className={container} key={index} ref={divContainerRef}>
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
