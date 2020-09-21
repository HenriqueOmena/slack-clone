import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import db from 'firebaseConfig';
import chatStyle from './chat.styles';
import Messages from './components/messages/messages';
import InputChat from './components/input/Input-chat';

const Chat = () => {
  const classes = chatStyle();
  const { idChannel } = useParams();
  // TODO: fix types for this state
  const [channelDetails, setChannelDetails] = useState<any>();

  useEffect(() => {
    if (idChannel) {
      db.collection('channels')
        .doc(idChannel)
        .onSnapshot(snapshot => setChannelDetails(snapshot.data()));
    }
  }, [idChannel]);

  return (
    <div className={classes.chat}>
      <div className={classes.header}>
        <div className={classes.headerLeft}>
          <h4 className={classes.channelName}>
            <strong># {channelDetails?.name}</strong>
            <StarBorderOutlinedIcon className={classes.starIcon} />
          </h4>
        </div>

        <div className={classes.headerRight}>
          <InfoOutlinedIcon className={classes.infoIcon} /> Details
        </div>
      </div>

      <div className="chatMessages">
        <Messages />
      </div>

      <InputChat channelName={channelDetails?.name} channelId={idChannel} />
    </div>
  );
};

export default Chat;
