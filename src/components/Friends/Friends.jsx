import React from 'react';
import style from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {
  let friendsListEl = props.state.friends.map((friend) => (
    <Friend name={friend.name} />
  ));
  return <div className={style.friendList}>{friendsListEl}</div>;
};
export default Friends;
