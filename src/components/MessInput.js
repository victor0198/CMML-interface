import '../styles/MessInput.css';
import React from "react";

const MessInput =({req, message, setMessage})=> {

  const handleInput = event => {
    setMessage(event.target.value);
  };

  function send(e){
    req(e, message);
    // setMessage('');
  }

  return (
    <div className="input_block">
        <textarea className="input_field" type="text" placeholder="Type here" onChange={handleInput} value={message}></textarea>
        <button className="send_button" onClick={(e) => send(e)}>
          <img src="send_btn.png" alt="send"></img>
        </button>
    </div>
  );
}

export default MessInput;
