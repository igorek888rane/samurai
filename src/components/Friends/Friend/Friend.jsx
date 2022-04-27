import React from 'react';
import style from './../Friends.module.css';

const Friend = (props) => {
  return (
    <div className={style.friend}>
      <div className={style.icon}></div>
      <div className={style.name}>{props.name}</div>
    </div>
  );
};


export default Friend;
