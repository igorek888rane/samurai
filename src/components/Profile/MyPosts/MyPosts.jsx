import React from 'react';

import style from './MyPosts.module.css';
import Posts from './Post/Posts';

const MyPosts = (props) => {
  let postsElement = props.posts
  .map(post => (
<Posts message={post.post} likesCount={post.likesCount}  />
  ));

  let newPostelement = React.createRef();
  let addPost = () => {
    let text = newPostelement.current.value;
    props.addPost(text);
    newPostelement.current.value = '';
    
  };

  return (
    <div className={style.postsBlock}>
      <div>My posts</div>
      <div>
        <div>
          <textarea ref={newPostelement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>add posts</button>
        </div>
      </div>
      <div className={style.posts}>{postsElement.reverse()}</div>
    </div>
  );
};
export default MyPosts;
