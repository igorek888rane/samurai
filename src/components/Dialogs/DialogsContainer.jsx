import React from "react";
import { sendMessageActionCreator, updateMessageActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {
  let state = props.store.getState();
  let sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };
  let onChangeMessage = (text) => {
    props.store.dispatch(updateMessageActionCreator(text));
  };

  return <Dialogs sendMessage={sendMessage} onChangeMessage={onChangeMessage} state = {state}/>;
};
export default DialogsContainer;
