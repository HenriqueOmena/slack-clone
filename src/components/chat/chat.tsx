import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import db from 'firebaseConfig';
import chatStyle from './chat.styles';
import Message, { MessageI } from './components/message';

const Chat = () => {
  const classes = chatStyle();
  const { idChannel } = useParams();
  // TODO: fix types for this state
  const [channelDetails, setChannelDetails] = useState<any>();
  const [channelMessages, setChannelMessages] = useState<any>([]);

  useEffect(() => {
    if (idChannel) {
      db.collection('channels')
        .doc(idChannel)
        .onSnapshot(snapshot => setChannelDetails(snapshot.data()));
    }

    db.collection('channels')
      .doc(idChannel)
      .collection('messages')
      .orderBy('date', 'asc')
      .onSnapshot(snapshot => {
        console.log(snapshot.docs);
        setChannelMessages(snapshot.docs.map(doc => doc.data()));
      });
  }, [idChannel]);

  console.log(channelMessages);
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
        {channelMessages.map(
          (
            message: JSX.IntrinsicAttributes &
              MessageI & { children?: React.ReactNode },
            index: any
          ) => (
            <Message {...message} key={index} />
          )
        )}
      </div>
    </div>
  );
};

export default Chat;
