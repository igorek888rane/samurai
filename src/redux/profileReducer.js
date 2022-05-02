let ADD_POST = "ADD_POST";
let UPDATE_POST_TEXT = "UPDATE_POST_TEXT";
let initialState = {
  posts: [
    { id: 1, post: "Hello", likesCount: 5 },
    { id: 2, post: "i am Morty", likesCount: 50 },
    { id: 3, post: "My granpa is Rick", likesCount: 10 },
    { id: 4, post: "He is a genius ", likesCount: 110 },
  ],
  newPostText: "",
}
const profileReducer = (state = initialState, action) => {
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
