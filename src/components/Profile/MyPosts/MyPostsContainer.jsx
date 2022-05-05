import React from "react";
import { addPostActionCreator, updatePostActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };
  let onPostChange = (text) => {
    props.store.dispatch(updatePostActionCreator(text));
  };

  return <MyPosts state={state} addPost={addPost} onPostChange={onPostChange} />;
};
export default MyPostsContainer;
