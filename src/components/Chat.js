import '../styles/Chat.css';
import Messages from './Messages';
import MessInput from './MessInput';
import React, {useState} from "react";

const Chat =()=> {
const [newMessage, setNewMessage] = useState();
    function req(e, message){
        // send POST request
        const url = 'http://localhost:3001/cmml'
        const options = {
            method: 'POST',
            body: message
        }
        fetch(url, options)
        .then(res => res.json())
        .then(res => {
            setNewMessage(res);
        });
    }

    return (
        <div className="">
            <Messages mes={newMessage}/>
            <MessInput req={req}/>
        </div>
    );
}

export default Chat;
