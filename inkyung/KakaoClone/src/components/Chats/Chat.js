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
        chatsContent: [],
        new: []
    };

    componentDidMount() {
        const { chatStore, friendStore} = this.props;
        friendStore.getFriends(0,3);
        chatStore.getChats(0,2);
        this.setState({
            friends: friendStore.returnFriends
        });
        let Clength = chatStore.length;
        let Flength = friendStore.length;
        friendStore.concatReset();
       for(let i=0;i<Flength;i++){
        for(let j=0;j<Clength;j++){
            if(chatStore.returnChats[j].Friend_ID === friendStore.returnFriends[i].Friend_ID) {
              friendStore.concatItems(chatStore.returnChats[j], friendStore.returnFriends[i]);   
            }
        }    
       }
       this.setState({
            chats: friendStore.combines
        });
    }

    toggleChatting = (e) => {
        const { friendStore } = this.props;
        friendStore.getOne(e,friendStore.combines);
        this.setState({
            showChat: !this.state.showChat,
            chatsContent: friendStore.returnFriendInfo
        });
        
      }

    render(){
        const{chats, chatsContent} = this.state;
        return(
            <Out>
            <Frame>
                {chats.map((item, index) => (
                        <Card key={index} post={item}onToggle={this.toggleChatting}></Card> 
                    ))}
            </Frame>
            
            {this.state.showChat?(
                <div>{chatsContent.map((item, index) => (
                    <Contents key={index} post={item} cancelChat={this.toggleChatting.bind(this)}/>
                ))}</div>
                
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

