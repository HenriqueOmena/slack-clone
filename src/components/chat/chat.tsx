import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import db from 'firebaseConfig';
import chatStyle from './chat.styles';
import Messages from './components/messages';
import InputChat from './components/input';

type channelDetails = firebase.firestore.DocumentData;

const Chat: React.FC = () => {
  const classes = chatStyle();
  const { idChannel } = useParams();
  const [channelDetails, setChannelDetails] = useState<channelDetails>();

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

      <div className={classes.chatMessages}>
        <Messages />
        <InputChat channelName={channelDetails?.name} channelId={idChannel} />
      </div>
    </div>
  );
};

export default Chat;
