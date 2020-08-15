import React from 'react';
import headerStyles from './header.styles';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const Header = () => {
  const classes = headerStyles();

  return (
    <div className={classes.header}>
      <div className={classes.left}>
        <Avatar className={classes.avatar} alt={'user?.displayName'} src="" />
        <AccessTimeIcon className={classes.second} />
      </div>
      <div className={classes.search}>
        <SearchIcon />
        <input className={classes.searchInput} />
      </div>
      <div className={classes.right} placeholder="Search for your friend">
        <HelpOutlineIcon className={classes.rightIcon} />
      </div>
    </div>
  );
};

export default Header;
