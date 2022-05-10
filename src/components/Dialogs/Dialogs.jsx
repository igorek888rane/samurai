import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElement = props.state.dialogsPage.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);

  let messagesElement = props.state.dialogsPage.messages.map((message) => <Message message={message.message} />);

  let sendMessage = () => {
    props.sendMessage()
  };
  let onChangeMessage = (event) => {
    let text = event.target.value;
   props.onChangeMessage(text)
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElement}</div>
      <div className={style.messages}>
        <div>{messagesElement}</div>
        <div>
          <textarea placeholder="Enter your message"
            onChange={onChangeMessage}
            value={props.state.dialogsPage.newMessageText}></textarea>
        </div>
        <div>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
