import React from 'react';
import style from './News.module.css';
import NewsBlock from "./NewsBlock/NewsBlock";

const News = (props) => {
    let newBlock = props.state.news.map(news => <NewsBlock img = {news.img} text = {news.text} likesCount = {news.likesCount}/>)
    return (
        <div className={style.newsBlock}>
         {newBlock}
        </div>);
};
export default News;
