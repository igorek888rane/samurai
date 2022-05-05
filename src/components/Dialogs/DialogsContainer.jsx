import React from "react";
import { connect } from "react-redux";
import { sendMessageActionCreator, updateMessageActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

// const DialogsContainer = (props) => {
//   let state = props.store.getState();
//   let sendMessage = () => {
//     props.store.dispatch(sendMessageActionCreator());
//   };
//   let onChangeMessage = (text) => {
//     props.store.dispatch(updateMessageActionCreator(text));
//   };

//   return <Dialogs sendMessage={sendMessage} onChangeMessage={onChangeMessage} state = {state}/>;
// };
let mapStateToProps = (state) => {
  return {
    state: state,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
    onChangeMessage: (text) => {
      dispatch(updateMessageActionCreator(text));
    },
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
