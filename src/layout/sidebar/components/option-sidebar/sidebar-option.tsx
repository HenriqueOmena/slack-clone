import React, { FormEvent, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import db from 'firebaseConfig';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon';
import { Collapse, Input } from '@material-ui/core';
import sidebarOptionStyle from './sidebar-option.styles';

interface SidebarOption {
  icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  title: string;
  id?: string;
  addChannelOption?: boolean;
}

const SidebarOption: React.FC<SidebarOption> = ({
  icon: Icon,
  title,
  id,
  addChannelOption,
}: SidebarOption) => {
  const classes = sidebarOptionStyle();
  const history = useHistory();
  const [checked, setChecked] = React.useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputCheckCurrent = inputRef.current;

  const addChannel = (name: string) => db.collection('channels').add({ name });

  const selectChanel = () => {
    const path = id ? `/channel/${id}` : 'title';
    history.push(path);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (inputCheckCurrent !== null) {
      addChannel(inputCheckCurrent.value);
      inputCheckCurrent.value = '';
    }
  };

  const showInputAddNewChannel = async () => {
    await setChecked(!checked);
    if (inputCheckCurrent !== null) inputCheckCurrent.focus();
  };

  return (
    <>
      <div
        className={classes.sidebarOption}
        onClick={addChannelOption ? showInputAddNewChannel : selectChanel}
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
      {addChannelOption && (
        <Collapse in={checked}>
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="New Channel"
              name={title}
              inputProps={{ 'aria-label': 'description' }}
              inputRef={inputRef}
              classes={{
                root: classes.inputAddChannel,
              }}
            />
          </form>
        </Collapse>
      )}
    </>
  );
};

export default SidebarOption;
