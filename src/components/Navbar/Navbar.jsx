import React from 'react';
import { NavLink } from 'react-router-dom';
import FriendsBar from './FriendsBar/FriendsBar';
import style from './Navbar.module.css';

const Navbar = (props) => {
  let friendsBarEl = props.state.friendsPage.friends.map(friends =>(<FriendsBar name = {friends.name}/>))
  friendsBarEl.length = 3;
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink to="/profile" className={navData => navData.isActive ? style.active : style.item}>Profile</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/dialogs" className={navData => navData.isActive ? style.active : style.item}>Messages</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/news" className={navData => navData.isActive ? style.active : style.item}>News</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/music" className={navData => navData.isActive ? style.active : style.item}>Music</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/settings" className={navData => navData.isActive ? style.active : style.item}>Settings</NavLink>
      </div>
      <div className={style.item}> <h3><NavLink to="/friends" className={navData => navData.isActive ? style.active : style.item}>Friends</NavLink></h3></div>
     
      <div className={style.friends}>{friendsBarEl}</div>
    </nav>
  );
};
export default Navbar;
