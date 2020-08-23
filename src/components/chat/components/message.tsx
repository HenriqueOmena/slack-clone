import React from 'react';
import messageStyle from './message.style';

export interface MessageI {
  message: string;
  date: { seconds: number; nanoseconds: number; toDate: () => string };
  userName: string;
  userImage: string;
}

const Message: React.FC<MessageI> = ({
  message,
  date,
  userName,
  userImage,
}: MessageI) => {
  const { container, messageInfo, avatarImg, dateInfo } = messageStyle();
  return (
    <div className={container}>
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
  );
};

export default Message;
