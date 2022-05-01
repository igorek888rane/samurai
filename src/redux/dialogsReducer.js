let SEND_MESSAGE = "SEND_MESSAGE";
let UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id:state.messages.length + 1,
        message:state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_MESSAGE_TEXT:
        state.newMessageText = action.text;
      return state;
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateMessageActionCreator = (text) => ({ type: UPDATE_MESSAGE_TEXT, text: text });
export default dialogsReducer;
