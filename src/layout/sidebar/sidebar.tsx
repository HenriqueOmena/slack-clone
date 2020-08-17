import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import sidebarStyle from './sidebar.styles';
import SidebarOption from './components/sidebar-option';

const Sidebar = () => {
  const classes = sidebarStyle();
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
    </div>
  );
};

export default Sidebar;
