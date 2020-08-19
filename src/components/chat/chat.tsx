import React from 'react';
import { useParams } from 'react-router-dom';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import chatStyle from './chat.styles';

const Chat = () => {
  const classes = chatStyle();
  const { channelId } = useParams();

  return (
    <div className={classes.chat}>
      {channelId}
      <div className={classes.header}>
        <div className={classes.headerLeft}>
          <h4 className={classes.channelName}>
            <strong># general</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className={classes.headerRight}>
          <p>
            <InfoOutlinedIcon />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
