import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import inputStyle from './input-chat.styles';

interface InputChat {
  channelName?: string;
  channelId?: number;
}

type SendMessage = React.MouseEvent<HTMLButtonElement, MouseEvent>;

const InputChat: React.FC<InputChat> = ({ channelName, channelId }) => {
  const { chatInput } = inputStyle();

  const sendMessage = (e: SendMessage) => {
    e.preventDefault();
  };
  return (
    <div className={chatInput}>
      <form action="">
        <input type="text" />
        <Button type="submit" onClick={sendMessage} />
      </form>
    </div>
  );
};

export default InputChat;
