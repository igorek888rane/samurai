import React from "react";
import { connect } from "react-redux";
import { sendMessageActionCreator, updateMessageActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

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
