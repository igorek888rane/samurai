import React from 'react';
import style from './../News.module.css';

const NewsBlock = (props) => {

    return (
        <div className={style.news}>
            <div className={style.imgNews}><img src={props.img} alt="" /></div>
            <div className={style.newsText}>{props.text}</div>
            <div className={style.like}>
          <span>
            <img src="https://img.akusherstvo.ru/images/magaz/im695780.jpg" />
            {props.likesCount}
          </span>
          
        </div>
        </div>);
};
export default NewsBlock;
