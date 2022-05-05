import React from "react";
import style from "./MyPosts.module.css";
import Posts from "./Post/Posts";

const MyPosts = (props) => {
  let postsElement = props.state.profilePage.posts.map((post) => (
    <Posts message={post.post} likesCount={post.likesCount} />
  ));

  let addPost = () => {
    props.addPost();
  };
  let onPostChange = (event) => {
    let text = event.target.value;
    props.onPostChange(text);
  };

  return (
    <div className={style.postsBlock}>
      <div>My posts</div>
      <div>
        <div>
          <textarea onChange={onPostChange} value={props.state.profilePage.newPostText} />
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
