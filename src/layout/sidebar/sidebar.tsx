import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import sidebarStyle from './sidebar.styles';

const Sidebar = () => {
  const classes = sidebarStyle();
  return (
    <div className={classes.sidebar}>
      <div className={classes.header}>
        <div className={classes.info}>
          <h2> Developing </h2>
          <h3>
            <FiberManualRecordIcon />
            Henrique Omena
          </h3>
        </div>
      </div>
      <CreateIcon className={classes.iconCreate} />
    </div>
  );
};

export default Sidebar;
