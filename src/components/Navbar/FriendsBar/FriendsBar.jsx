import React from 'react';

import style from './../Navbar.module.css';

const FriendsBar = (props) => {
  return (
    <div className={style.friend}>
      <div className={style.icon}></div>
      <div className={style.name}>{props.name}</div>
    </div>
  );
};
export default FriendsBar;
