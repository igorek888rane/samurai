import React from 'react';
import style from './Posts.module.css';

const Posts = (props) => {
  return (
    <div>
      <div className={style.item}>
        <img src="https://static10.tgstat.ru/channels/_0/de/deeb9f0e7b43dc6d67f4628356c274d7.jpg" />
        {props.message}
        <div className={style.like}>
          <span>
            <img src="https://img.akusherstvo.ru/images/magaz/im695780.jpg" />
            {props.likesCount}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Posts;
