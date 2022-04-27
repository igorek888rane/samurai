import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './../Dialogs.module.css';

const DialogItem = (props) => {
  return (
    
    <div className={style.userItem}>
      <div className={style.icon}></div>
      <NavLink
        to={'/dialogs/' + props.id}
        className={(dialogData) =>
          dialogData.isActive ? style.active : style.dialog
        }
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
