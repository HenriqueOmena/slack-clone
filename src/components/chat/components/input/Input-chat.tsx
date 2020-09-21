import React, { useState, MouseEvent, useContext } from 'react';
import Context from 'store/config/config';
import db from 'firebaseConfig';
import firebase from 'firebase';
import inputStyle from './input-chat.styles';

interface InputChat {
  channelName?: string;
  channelId?: string;
}

const InputChat: React.FC<InputChat> = ({
  channelName,
  channelId,
}: InputChat) => {
  const { container, chatForm, inputText, displayNone } = inputStyle();
  const [input, setInput] = useState('');
  const {
    store: {
      auth: { user },
    },
  } = useContext(Context);

  const sendMessage = (event: MouseEvent) => {
    event.preventDefault();

    if (channelId) {
      db.collection('channels').doc(channelId).collection('messages').add({
        date: firebase.firestore.FieldValue.serverTimestamp(),
        message: input,
        userImage: user?.photoURL,
        userName: user?.displayName,
      });
    }
  };

  return (
    <div className={container}>
      <form className={chatForm}>
        <input
          type="text"
          value={input}
          onChange={event => setInput(event.target.value)}
          className={inputText}
          placeholder={`Message #${channelName?.toLowerCase()}`}
        />
        <button type="submit" onClick={sendMessage} className={displayNone}>
          Send
        </button>
      </form>
    </div>
  );
};

export default InputChat;
