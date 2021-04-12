import React from 'react'
import Chat from '../../components/Chat/Chat'
import BottomMenu from '../../components/Navbar/BottomMenu'
import TopBar from '../../components/Navbar/TopBar'
import TopMenu from '../../components/Navbar/TopMenu'
import './style.scss'

function ChatPage() {
    return (
        <div className="Frame">
            <TopBar/>
            <div className="main__content">
                <TopMenu tabTitle="채팅"/>
                <div className="content">
                    <Chat/>
                    <Chat/>
                    <Chat/>
                    <Chat/>
                    <Chat/>
                    <Chat/>
                    <Chat/>
                    <Chat/>
                </div>
            <BottomMenu/>
            </div>
        </div>
    )
}

export default ChatPage
