import '../styles/Chat.css';
import MessagesList from './MessagesList';
import MessInput from './MessInput';
import React, {useState} from "react";

const Chat =()=> {
const [newMessage, setNewMessage] = useState('');
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
            console.log("1");
            setNewMessage(res);
            console.log("1");
        });
    }

    return (
        <div className="chat">
            <MessagesList mes={newMessage}/>
            <MessInput req={req}/>
        </div>
    );
}

export default Chat;
