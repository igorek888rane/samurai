import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import style from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogsElement = props.state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElement = props.state.messages.map((message) => (
    <Message message={message.message} />
  ));

  let newMessage = React.createRef();
  let sendMessage = () => {
    let text = newMessage.current.value;
    props.addMessage(text);
    newMessage.current.value = '';

  }

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElement}</div>
      <div className={style.messages}>
        {messagesElement}
        <textarea ref={newMessage} ></textarea>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};
export default Dialogs;
