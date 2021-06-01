import React from "react";
import '../styles/Message.css'


function Message({message}) {
  function renderObject(message){
    console.log(message);
    
    if (message!==undefined && message!=='') 
        if(message.type === 'message')
            if(message.user === 'me')
                return (<div className="message_right">
                    <div className="my_message_body">
                        <p>
                            {message.data}
                        </p>
                    </div>
                </div>);
            else
                return (<div className="message_left">
                    <div className="message_body">
                        <p>
                            {message.data}
                        </p>
                    </div>
                </div>);
        else if(message.type === 'button')
            if(message.user === 'me')
                return (<div className="message_right">
                    <div className="button_msg">
                        <button>{message.data[0]}</button>
                    </div>
                    <div className="my_message_body">
                        <p>
                            {message.data[1]}
                        </p>
                    </div>
                </div>);
            else
            return (<div className="message_left">
                <div className="button_msg">
                    <button>{message.data[0]}</button>
                </div>
                <div className="my_message_body">
                    <p>
                        {message.data[1]}
                    </p>
                </div>
            </div>);
        else if(message.type === 'question')
            if(message.user === 'me')
                return (<div className="message_right">
                    <div>
                        <p>{message.data.text}</p>
                        <button>{message.data.answers[0]}</button>
                        <button>{message.data.answers[1]}</button>
                    </div>
                    <div className="my_message_body">
                        <p>
                            {message.data.responses[0]}
                        </p>
                        <span>id</span>
                        <span>time</span>
                    </div>
                    <div className="my_message_body">
                        <p>
                            {message.data.responses[1]}
                        </p>
                    </div>
                </div>);
            else
                return (<div className="message_left">
                    <div>
                        <p>{message.data.text}</p>
                        <button>{message.data.answers[0]}</button>
                        <button>{message.data.answers[1]}</button>
                    </div>
                    <div className="my_message_body">
                        <p>
                            {message.data.responses[0]}
                        </p>
                        <span>id</span>
                        <span>time</span>
                    </div>
                    <div className="my_message_body">
                        <p>
                            {message.data.responses[1]}
                        </p>
                    </div>
                </div>);
        else
            return (<h6>The message cannot be rendered.</h6>);
    else
        return (<br></br>);
  }

  return (
    renderObject(message)
  );
}

export default Message;
