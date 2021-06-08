import React from "react";


function Message({message}) {
    function displayMessage(id){
        let elementToActivate = document.getElementById("i"+id);
        elementToActivate.style.display = "initial";
    }

    function remove_error_msg(){
        let elem = document.getElementById("err_msg"); if(elem !== null) elem.remove();
    }

    function build(message){
        const mystyle = {};
        if(message.styles!==undefined){
            console.log(message.styles);
            if(message.styles.color!==undefined){
                console.log(message.styles.color);
                mystyle.color = message.styles.color;
            }
            if(message.styles.bgcolor!==undefined){
                console.log(message.styles.bgcolor);
                mystyle.backgroundColor = message.styles.bgcolor;
            }
            if(message.styles.size!==undefined){
                console.log(message.styles.size);
                mystyle.fontSize = message.styles.size+"px";
            }
        }
        
        if (message!==undefined && message!=='') 
            if(message.type === 'error'){
                setTimeout(remove_error_msg(), 3000);
                return (
                    <div id="err_msg" className="error">
                        <p>
                            {message.data}
                        </p>
                    </div>);
            }
            else if(message.type === 'message')
                return (<div className={(message.user !== 'partner')?"message_right":"message_left"}>
                    <div className={(message.user !== 'partner')?"my_message_body":"message_body"}  style={mystyle}>
                        <p>
                            {message.data}
                        </p>
                        <div className="data_block">
                            <span className="id_name">
                                #{message.id}
                            </span>
                            <span className="time">
                                {message.hour}
                            </span>
                        </div>
                    </div>
                </div>);
            else if(message.type === 'button'){
                let asignee = (message.user !== 'partner')?"my_message_body":"message_body";
                let rClass = asignee + " hidden";
                return (<div className={(message.user !== 'partner')?"message_right":"message_left"}>
                    <div className="button-container">
                        <button onClick={() => displayMessage(message.id+"r")} className="btn">{message.data[0]}</button>
                        <div className="data_block">
                            <span className="id_name">
                                #{message.id}
                            </span>
                            <span className="time">
                                {message.hour}
                            </span>
                        </div>
                    </div>
                    <div id={"i"+message.id+"r"} className={rClass} style={mystyle}>
                        <p>
                            {message.data[1]}
                        </p>
                        <div className="data_block">
                            <span className="id_name">
                                #{message.id}
                            </span>
                            <span className="time">
                                {message.hour}
                            </span>
                        </div>
                    </div>
                </div>);
            }
            else if(message.type === 'question'){
                let asignee = (message.user !== 'partner')?"my_message_body":"message_body";
                let qCass = asignee + " question";
                let rClass = asignee + " hidden";

                return (<div className={(message.user !== 'partner')?"message_right":"message_left"}>
                    <div className={qCass}>
                        <p>{message.data.text}</p>
                        <div className="qbtns">
                            <button onClick={() => displayMessage(message.id+"r1")}>
                                {message.data.answers[0]}
                            </button>
                            <button onClick={() => displayMessage(message.id+"r2")}>
                                {message.data.answers[1]}
                            </button>
                        </div>
                        <div className="data_block">
                            <span className="id_name">
                                #{message.id}
                            </span>
                            <span className="time">
                                {message.hour}
                            </span>
                        </div>
                    </div>
                    <div id={"i"+message.id+"r1"} className={rClass} style={mystyle}>
                        <p>
                            {message.data.responses[0]}
                        </p>
                        <div className="data_block">
                            <span className="id_name">
                                #{message.id}
                            </span>
                            <span className="time">
                                {message.hour}
                            </span>
                        </div>
                    </div>
                    <div id={"i"+message.id+"r2"} className={rClass} style={mystyle}>
                        <p>
                            {message.data.responses[1]}
                        </p>
                        <div className="data_block">
                            <span className="id_name">
                                #{message.id}
                            </span>
                            <span className="time">
                                {message.hour}
                            </span>
                        </div>
                    </div>
                </div>);
            }
            else if(message.type === 'gift'){
                let asignee = (message.user !== 'partner')?"my_message_body":"message_body";
                let rClass = asignee + " hidden";
                let imgSrc = message.data[0] + ".png";
                return (<div className={(message.user !== 'partner')?"message_right":"message_left"}>
                    <div className="button-container">
                        <img className="btn gift" alt={message.data[0]} src={imgSrc} onClick={() => displayMessage(message.id+"r")}></img>
                        <div className="data_block">
                            <span className="id_name">
                                #{message.id}
                            </span>
                            <span className="time">
                                {message.hour}
                            </span>
                        </div>
                    </div>
                    <div id={"i"+message.id+"r"} className={rClass} style={mystyle}>
                        <p>
                            {message.data[1]}
                        </p>
                        <div className="data_block">
                            <span className="id_name">
                                #{message.id}
                            </span>
                            <span className="time">
                                {message.hour}
                            </span>
                        </div>
                    </div>
                </div>);
            }
            else
                return (<h6>The message cannot be rendered.</h6>);
        else
            return (<br></br>);
    }

    return (
        build(message)
    );
}

export default Message;
