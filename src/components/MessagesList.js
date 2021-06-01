import '../styles/MessagesList.css';
import React, { useEffect, useState } from "react";
import Message from './Message';

const MessagesList =(props)=> {
  const [chat, setChat] = useState([
    {data:"hi", type: "message", user: "me"}, 
    {type: "button", data: ["press it", "hru?"], user: "me"}, 
    {data:"good", type: "message", user: "other"}
  ]);

  useEffect(()=>{
    setChat(c => [...c, props.mes]);
  },[props.mes]);
  
  return (
    <div className="messages">
      {chat.map((text, index) =>{
        return(
          <Message key={index} message={text}></Message>
        );
      })}
    </div>
  );
}

export default MessagesList;