let SEND_MESSAGE = "SEND_MESSAGE";
let UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT";
let initialState = {
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
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        newMessageText: "",
        messages: [
          ...state.messages,
          {
            id: state.messages.length + 1,
            message: state.newMessageText,
          },
        ],
      };

    case UPDATE_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.text,
      };
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateMessageActionCreator = (text) => ({ type: UPDATE_MESSAGE_TEXT, text: text });
export default dialogsReducer;
