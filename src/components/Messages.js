import '../styles/Messages.css';
import React, { useEffect, useState } from "react";

const Messages =(props)=> {
  const [chat, setChat] = useState([]);
  useEffect(()=>{
    setChat(c => [...c, props.mes]);
  },[props.mes]);
  
  return (
    <div className="">
      <header className="">
        {chat.map((text, index) =>{
          return(
            <p key={index}>{JSON.stringify(text)}</p>
          );
        })}
      </header>
    </div>
  );
}

export default Messages;