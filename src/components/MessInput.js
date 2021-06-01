import '../styles/MessInput.css';
import React, {useState} from "react";

const MessInput =({req})=> {
  const [message, setMessage] = useState('');

  const handleInput = event => {
    setMessage(event.target.value);  
  };

  function send(e){
    req(e, message);
    setMessage('');
  }

  return (
    <div className="input_block">
        <textarea className="input_field" type="text" placeholder="Type message here" onChange={handleInput} value={message}></textarea>
        <button className="send_button" onClick={(e) => send(e)}>Send</button>
    </div>
  );
}

export default MessInput;
