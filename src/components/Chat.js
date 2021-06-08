import '../styles/Chat.css';
import MessagesList from './MessagesList';
import MessInput from './MessInput';
import React, {useState} from "react";

const Chat =()=> {
    const [newMessage, setNewMessage] = useState('');

    const [message, setMessage] = useState('');
    
    function req(e, message){
        if(message!==""){
            // send POST request
            const url = 'http://localhost:3001/cmml'
            const options = {
                method: 'POST',
                body: message
            }
            fetch(url, options)
            .then(res => res.json())
            .then(res => {
                let d = new Date();
                res.hour = d.getHours() + ":" + d.getMinutes();
                setNewMessage(res);
                if(res.type !== "error"){
                    setMessage('');
                }
            });
        }
        return true;
    }

    return (
        <div className="main">
            <div className="chat">
                <MessagesList mes={newMessage}/>
                <MessInput req={req} setMessage={setMessage} message={message}/>
            </div>
        </div>
    );
}

export default Chat;
