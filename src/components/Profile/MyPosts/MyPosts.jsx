import React from "react";

import style from "./MyPosts.module.css";
import Posts from "./Post/Posts";

const MyPosts = (props) => {
  let postsElement = props.posts.map((post) => (
    <Posts message={post.post} likesCount={post.likesCount} />
  ));

  let newPostelement = React.createRef();

  let addPost = () => {
    props.addPost();
  };
  let onPostChange = () => {
    let text = newPostelement.current.value;
    props.updatePostText(text);
  };

  return (
    <div className={style.postsBlock}>
      <div>My posts</div>
      <div>
        <div>
          <textarea
            ref={newPostelement}
            onChange={onPostChange}
            value={props.newPostText}
          />
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
