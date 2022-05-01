let ADD_POST = "ADD_POST";
let UPDATE_POST_TEXT = "UPDATE_POST_TEXT";
const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length + 1,
        post: state.newPostText,
        likesCount: 0,
      };

      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_POST_TEXT:
      state.newPostText = action.text;
      return state;
    default:
      return state;
  }
};
export const  addPostActionCreator = () =>({type:ADD_POST})
export const  updatePostActionCreator = (text) =>({type:UPDATE_POST_TEXT,text:text})
export default profileReducer;
