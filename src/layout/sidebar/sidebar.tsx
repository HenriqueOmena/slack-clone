import React, { useState, useEffect } from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import db from 'firebaseConfig';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import sidebarStyle from './sidebar.styles';
import SidebarOption from './components/sidebar-option';

export interface Channel {
  id: string;
  name: string;
}

const Sidebar = () => {
  const classes = sidebarStyle();
  const [channels, setChannels] = useState<Channel[]>([]);

  useEffect(() => {
    db.collection('channels').onSnapshot(snapshot => {
      setChannels(
        snapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );
    });
  }, []);

  return (
    <div className={classes.sidebar}>
      <div className={classes.header}>
        <div className={classes.info}>
          <h2 className={classes.titleH2}> Developing </h2>
          <h3 className={classes.titleH3}>
            <FiberManualRecordIcon className={classes.iconName} />
            Henrique Omena
          </h3>
        </div>
        <CreateIcon className={classes.iconCreate} />
      </div>
      <SidebarOption title="Whatever Channel" />
      <SidebarOption title="Threads" icon={InsertCommentIcon} />
      <hr className={classes.hr} />
      <SidebarOption
        title="Add Channel"
        icon={AddOutlinedIcon}
        addChannelOption
      />

      {channels.map(channel => (
        <SidebarOption
          title={channel.name}
          id={channel.id}
          key={channel.name}
        />
      ))}
    </div>
  );
};

export default Sidebar;
