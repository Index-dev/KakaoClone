import React from "react";
import styled from "styled-components";
import Topbar from "../../components/Main/Topbar";
import Chat from "../../components/Chats/Chat";
import Nav from "../../components/Main/Nav";
import {FcVoicePresentation} from "react-icons/fc";

class Chatpage extends React.Component{
    render(){
        return(
            <Frame>
                <Topbar></Topbar>
                <Title>채팅<Chaticon/></Title>
                <Chat></Chat>
                <Nav></Nav>
            </Frame>
        )
    }
}

const Frame = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 5% 10% 75% 10%;
    grid-template-areas:
        "topbar"
        "title"
        "list"
        "nav"
    ;
`;


const Title = styled.div`
    grid-area: title;
    padding-left: 10%;
    font-size: xx-large;
    display: flex; 
    align-items: center; 
    background-color: #ffe6e6;
`

export const Chaticon = styled(FcVoicePresentation)`
    font-size: xx-large;
    padding-left: 1%;
`

export default Chatpage;