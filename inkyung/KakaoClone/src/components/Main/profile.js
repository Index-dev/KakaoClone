import React from 'react';
import styled from "styled-components";
import { BsChatFill } from "react-icons/bs";
import { ImPhone } from "react-icons/im";
import { AiOutlineClose } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";
import { AiOutlineGift } from "react-icons/ai";
import { TiStarOutline } from "react-icons/ti";
import { BsPerson } from "react-icons/bs";
import { inject, observer } from "mobx-react";
import Contents from "../Chats/Contents";

@inject("friendStore", "chatStore")
@observer
class Profile extends React.Component {
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
            friends: friendStore.returnFriends
        });
        let Clength = chatStore.length;
        let Flength = friendStore.length;

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

        if(friendStore.returnFriendInfo.length === 0){
            friendStore.getOne(e,friendStore.returnFriends);
            this.setState({
                chatsContent: friendStore.returnFriendInfo
            });
        }
      }

      toggleP = () => {
        this.props.cancelProfile();
      }

    render(){
        const { Friend_ID, NAME, PImg, PMusic, PMessage, Like } = this.props.post;
        const{chatsContent} = this.state;
        return(
            <Out>
            <Frame>
                <Cancel>
                    <CClick onClick={this.props.cancelProfile}><Close/></CClick>
                    <GridIcons>
                        <Icons>
                            <IOut><Change/></IOut>
                            <IOut>￦</IOut>
                            <IOut><Gift/></IOut>
                            <IOutf value={Like}><Fav value={Like}/></IOutf>
                        </Icons>
                    </GridIcons>
                </Cancel>
                <ImgF>
                    <MDiv>
                        <Music>{PMusic}</Music>
                    </MDiv>
                    <Area>
                        <Fphoto>
                            <IMG src={PImg}></IMG>
                        </Fphoto>
                        <Fname>{NAME}<EditI/></Fname>
                        <Fmessage>{PMessage}</Fmessage>
                    </Area>
                </ImgF>
                <Bottom>
                    <Item2 onClick={() => this.toggleChatting(Friend_ID)}>
                        <MsgI/>
                        <Text>1:1 채팅</Text>
                    </Item2>
                    <Item>
                        <PhoneI/>
                        <Text>통화하기</Text>
                    </Item>
                </Bottom>
            </Frame>
            {this.state.showChat?(
                <div>{chatsContent.map((item, index) => (
                    <Contents key={index} post={item} cancelChat={this.toggleChatting.bind(this)} cancelP={this.toggleP.bind(this)}/>
                ))}</div>
             ) : null}
            </Out>
        )
    }
}

const Out = styled.div``

const Frame = styled.div`
    min-width: 375px;
    max-width: 414px;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: #95b4bf;
    display: grid;
    grid-template-rows: 5% 83% 12%;
    grid-template-areas: 
        "cancelf"
        "imgf"
        "bottom"
    ;
    z-index: 20;
`

const Cancel = styled.div`
    grid-area: cancelf;
    padding-top: 1%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const CClick = styled.button`
    border: none;
    background-color: transparent;
`

const GridIcons = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center; 
`

const Icons = styled.div`
    display: flex;
    justify-content: space-around;
    width: 8em;
`

const IOut = styled.div`
    height: 1.3em;
    width: 1.3em;
    border: 1px solid white;
    border-radius: 50%;
    background: transparent;
    display: flex; 
    align-items: center; 
    justify-content: center; 
    padding-bottom: 1%;
    color: white;
`

const IOutf = styled.div`
    height: 1.3em;
    width: 1.3em;
    border: 1px solid white;
    border-radius: 50%;
    background: transparent;
    display: flex; 
    align-items: center; 
    justify-content: center; 
    padding-bottom: 1%;
    border-color: ${props => props.value ? 'yellow' : 'white'};
`

const ImgF = styled.div`
    grid-area: imgf;
    display: grid;
    padding-bottom: 5vh;
    grid-template-rows: 15vh 15vh 15vh 15vh auto;
    grid-template-areas:
    "."
    "music"
    "."
    "."
    "area"
    ;
`

const MDiv = styled.div`
    grid-area: music;
    display: flex; 
    align-items: center; 
    justify-content: center;
`
const Music = styled.div`
    font-size: small;
    font-weight: 100;
    border: 1px solid;
    border-radius: 2em;
    padding-top: 1.5%;
    padding-bottom: 1.5%;
    padding-left: 3.5%;
    padding-right: 3.5%;
    border-color: rgba(204,204,204,0.5);
    background-color: rgba(204,204,204,0.5);
    opacity: 50%:
`

const Area = styled.div`
    grid-area: area;
    display: inline;
`

const Fphoto = styled.div`
    grid-area: img;
    display: flex; 
    align-items: center; 
    justify-content: center; 
`

const IMG = styled.img`
    width: 5em;
    height: 5em;
    object-fit: cover;
    border-radius: 2em;
    border: 1.5px solid;
    border: none;
    background-color: gray;
`

const Fname = styled.div`   
    grid-area: name;
    display: flex; 
    align-items: center; 
    justify-content: center; 
    color: white;
    padding-top: 2%;
    font-weight: 100;
`

const Fmessage = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center;  
    color: white;
    padding-top: 2%;
    font-weight: 100;
`

const Bottom = styled.div`
    grid-area: bottom;
    border-top: 1px solid #f2f2f2;
    display: flex; 
    align-items: center; 
    justify-content: space-evenly;
`

const Item = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
    color: white;
`

const Item2 = styled.button`
    display: flex; 
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
    color: white;
    border: none;
    background: transparent;
    font-size: larger;
`

const Text = styled.div`
    font-weight: 100;
    font-size: smaller;
    padding-top: 1%;
`

export const MsgI = styled(BsChatFill)`
    font-size: larger;
`
export const PhoneI = styled(ImPhone)`
    font-size: larger;
`
export const Close = styled(AiOutlineClose)`
    font-size: x-large;
    color: white;
`
export const EditI = styled(HiPencil)`
    font-size: small;
    color: gray;
`

export const Gift = styled(AiOutlineGift)`
    font-size: large;
`
export const Change = styled(BsPerson)`
    font-size: large;
`
export const Fav = styled(TiStarOutline)`
    font-size: large;
    color: ${props => props.value ? 'yellow' : 'white'};
`

export default Profile;