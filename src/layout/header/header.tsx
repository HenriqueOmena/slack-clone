import React, { useContext } from 'react';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Context from 'store/config/config';
import headerStyles from './header.styles';

const Header = () => {
  const classes = headerStyles();
  const {
    store: {
      auth: { user },
    },
  } = useContext(Context);

  return (
    <div className={classes.header}>
      <div className={classes.left}>
        <Avatar
          className={classes.avatar}
          alt={user?.displayName || undefined}
          src={user?.photoURL || undefined}
        />
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
