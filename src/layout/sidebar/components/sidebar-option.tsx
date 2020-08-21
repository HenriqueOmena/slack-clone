import React from 'react';
import { useHistory } from 'react-router-dom';
import db from 'firebaseConfig';
import sidebarOptionStyle from './sidebar-option.styles';

interface SidebarOption {
  /* FIXME: need find the type of icon */
  icon?: any /* OverridableComponent<SvgIconTypeMap<unknown, 'svg'>> */;
  title: string;
  id?: string;
  addChannelOption?: any;
}

const SidebarOption: React.FC<SidebarOption> = ({
  icon: Icon,
  title,
  id,
  addChannelOption,
}: SidebarOption) => {
  const classes = sidebarOptionStyle();
  const history = useHistory();

  const selectChanel = () => {
    const path = id ? `/channel/${id}` : 'title';
    history.push(path);
  };

  // TODO: insert a component more pretty and remove prompt
  const addChannel = () => {
    const channelName = prompt('Enter the name of new channel');

    if (channelName) {
      db.collection('channels').add({
        name: channelName,
      });
    }
  };

  return (
    <div
      className={classes.sidebarOption}
      onClick={addChannelOption ? addChannel : selectChanel}
    >
      {Icon && <Icon className={classes.icon} />}
      {Icon ? (
        <h3 className={classes.channel}>{title}</h3>
      ) : (
        <h3 className={classes.channel}>
          <span className={classes.hash}>#</span> {title}
        </h3>
      )}
    </div>
  );
};

export default SidebarOption;
