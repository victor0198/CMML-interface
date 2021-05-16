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
    <div className="">
        <input type="text" placeholder="Type message here" onChange={handleInput} value={message}></input>
        <button onClick={(e) => send(e)}>Send</button>
    </div>
  );
}

export default MessInput;
