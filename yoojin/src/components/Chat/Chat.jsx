import React from 'react'
import chatRoomImg from '../../img/conversation.png';
import './Chat.scss'
const Chat =()=> {
    return (
        <div className="chat__form">
            <div className="chat__image">
                <img src={chatRoomImg} alt=""/>
            </div>
            <div className="chat__name">
                <div>chat room name</div>
                <div>last message</div>
            </div>
            <div className="chat__message">time</div>
        </div>
    )
}

export default Chat
