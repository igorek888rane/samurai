import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElement = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElement = props.dialogsPage.messages.map((message) => (
    <Message message={message.message} />
  ));

  let newMessage = React.createRef();

  let sendMessage = () => {
    props.dispatch({type:'ADD-MESSAGE'});
  };
  let onChangeMessage = () => {
    let text = newMessage.current.value;
    props.dispatch({type:'UPDATE-MESSAGE-TEXT',text : text});
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElement}</div>
      <div className={style.messages}>
        {messagesElement}
        <textarea
          onChange={onChangeMessage}
          ref={newMessage}
          value={props.dialogsPage.newMessageText}
        ></textarea>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};
export default Dialogs;
