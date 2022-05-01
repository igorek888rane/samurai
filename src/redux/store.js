import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import newPageReducer from "./newPageReducer";
import profileReducer from "./profileReducer";

let store = {
  _state: {
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Masha" },
        { id: 2, name: "Vlad" },
        { id: 3, name: "Dima" },
        { id: 4, name: "Yura" },
        { id: 5, name: "Karl" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "i am Morty " },
        { id: 3, message: "My  granpa is Rick " },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" },
      ],
      newMessageText: "",
    },
    profilePage: {
      posts: [
        { id: 1, post: "Hello", likesCount: 5 },
        { id: 2, post: "i am Morty", likesCount: 50 },
        { id: 3, post: "My granpa is Rick", likesCount: 10 },
        { id: 4, post: "He is a genius ", likesCount: 110 },
      ],
      newPostText: "",
    },
    friends: {
      friends: [
        { id: 1, name: "Masha" },
        { id: 1, name: "Dima" },
        { id: 1, name: "Vlad" },
        { id: 1, name: "Andre" },
        { id: 1, name: "Vasya" },
        { id: 1, name: "Fill" },
      ],
    },
    newsPage: {
      news: [
        {
          img: "https://sun2-9.userapi.com/impf/AbYGMKr-6Jw5Tz0GtUaQAwf2FD8A9l4ZFPAUZQ/ekAoLQm28BY.jpg?size=537x240&quality=96&sign=525cb5a00e89a7b4230581a1be58e048&type=share",
          text: "В Малайзии готовы рассмотреть вопрос поставок электроники в Россию",
          likesCount: 10,
        },
        {
          img: "https://sun2-4.userapi.com/impf/U-Xr5sv87oeHT_bmfKDlBmI8hdEt9aClQ-IGtQ/LZ4D1d_sHWA.jpg?size=537x240&quality=96&crop=0,0,968,433&sign=c33b1a49a90a3ef955bace207bcef94e&type=share",
          text: "Микрон» надеется подрасти",
          likesCount: 4,
        },
        {
          img: "https://sun9-62.userapi.com/impg/zHAakPA6CVPQYkx_tr9vf6mLPDHmlxNvnJBkjA/vK0N7IUa4DY.jpg?size=537x240&quality=96&sign=1baa2cb3ca2882442f3206b83463771c&type=share",
          text: "У главного разработчика российских ARM-процессоров выручка рванула вверх. Рост более 1000%",
          likesCount: 40,
        },
      ],
    },
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage,action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
    this._state.friends = friendsReducer(this._state.friends,action);
    this._state.newsPage = newPageReducer(this._state.newsPage,action);
    this._callSubscriber(this._state);
  },
};
window.store = store;

export default store;

