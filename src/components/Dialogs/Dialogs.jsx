import React from "react";
import { sendMessageActionCreator, updateMessageActionCreator } from "../../redux/dialogsReducer";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElement = props.dialogsPage.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);

  let messagesElement = props.dialogsPage.messages.map((message) => <Message message={message.message} />);

  let sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  };
  let onChangeMessage = (event) => {
    let text = event.target.value;
    props.dispatch(updateMessageActionCreator(text));
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElement}</div>
      <div className={style.messages}>
        <div>{messagesElement}</div>
        <div>
          <textarea placeholder="Enter your message"
            onChange={onChangeMessage}
            value={props.dialogsPage.newMessageText}></textarea>
        </div>
        <div>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
