import React from 'react';
import sidebarOptionStyle from './sidebar-option.styles';

interface SidebarOption {
  /* FIXME: need find the type of icon */
  icon?: any /* OverridableComponent<SvgIconTypeMap<unknown, 'svg'>> */;
  title: string;
  id?: string;
}

const SidebarOption: React.FC<SidebarOption> = ({
  icon: Icon,
  title,
}: SidebarOption) => {
  const classes = sidebarOptionStyle();

  return (
    <div className={classes.sidebarOption}>
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
