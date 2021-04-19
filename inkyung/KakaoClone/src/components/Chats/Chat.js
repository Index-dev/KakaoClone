import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import Card from "./Card/index";
import Contents from "./Contents/index";

@inject("chatStore", "friendStore")
@observer
class Info extends React.Component{
    state={
        showChat: false,
        friends: [],
        chats: [],
        chatsContent: []
    };

    componentDidMount() {
        const { chatStore, friendStore} = this.props;
        friendStore.getFriends(0,3);
        chatStore.getChats(0,2);
        this.setState({
            chats: chatStore.returnChats,
            friends: friendStore.returnFriends

        });
    }

    toggleChatting = (e) => {
        const { chatStore } = this.props;
        chatStore.getChats(e,e+1);
        this.setState({
            showChat: !this.state.showChat,
            chatsContent: chatStore.returnChats[0]
        });

      }

    render(){
        const{chats,friends,chatsContent} = this.state;
        return(
            <Out>
            <Frame>
                {chats.map((item, index) => (
                        <Card key={index} post={item} value={friends} onToggle={this.toggleChatting}></Card> 
                    ))}
            </Frame>
            {this.state.showChat?(
                <Contents value={chatsContent} cancelChat={this.toggleChatting.bind(this)}/>
            ) : null}
            </Out>
        )
    }
}

const Out = styled.div``

const Frame = styled.div`
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(60px, 1fr));
    overflow: auto;
`

const B = styled.button`
    height: 60px;
    border: none;
    background: transparent;
    width: 100vw;
`


export default Info;

