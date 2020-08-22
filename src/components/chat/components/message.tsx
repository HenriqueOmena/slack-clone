import React from 'react';
import messageStyle from './message.style';

interface Message {
  message: string;
  date: string;
  userName: string;
  userImage: string;
}

const Message: React.FC<Message> = ({
  message,
  date,
  userName,
  userImage,
}: Message) => {
  const { container, messageInfo } = messageStyle();
  return (
    <div className={container}>
      <img src={userImage} alt="" />
      <div className={messageInfo}>
        <h4>{userName} date...</h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
