import '../styles/MessagesList.css';
import React, { useEffect, useState } from "react";
import Message from '../cmml_builer';
import '../styles/Message.css';

const MessagesList =(props)=> {
  const [chat, setChat] = useState([]);
  const [id, setId] = useState(1);

  useEffect(()=>{
    console.log(props.mes);
    if(props.mes!==""){
      let newMessage = props.mes;
      newMessage.id = id;
      setId(x => x+1);
      setChat(c => [...c, newMessage]);
    }
  },[props.mes]);
  
  return (
    <div className="messages">
      {chat.map((text, index) =>{
        return(
          <>
            <Message key={index} message={text}></Message>
          </>
        );
      })}
    </div>
  );
}

export default MessagesList;
