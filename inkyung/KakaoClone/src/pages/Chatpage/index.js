import React from "react";
import styled from "styled-components";
import Topbar from "../../components/Main/Topbar";
import Chat from "../../components/Chats/Chat";
import Nav from "../../components/Main/Nav";
import {BiSearch,BiMessageRoundedAdd} from "react-icons/bi";
import {IoSettingsOutline,IoMusicalNotesOutline} from "react-icons/io5";
import Advertisement from "../../Photos/Ad.jpg";

class Chatpage extends React.Component{
    render(){
        return(
            <Frame>
                <Topbar></Topbar>
                <Title>
                    <Text>채팅</Text>
                    <Icons>
                        <SearchI/>
                        <AddI/>
                        <MusicI/>
                        <SettingI/>
                    </Icons>
                </Title>
                <Ad>
                    <Img src={Advertisement}/>
                </Ad>
                <div/>
                <Chat></Chat>
                <Nav></Nav>
            </Frame>
        )
    }
}

const Frame = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 5% 7% 10% 1% 67% 10%;
    grid-template-areas:
        "topbar"
        "title"
        "ad"
        "."
        "list"
        "nav"
    ;
`;


const Title = styled.div`
    grid-area: title;
    padding-left: 5%;
    padding-right: 3%;
    font-size: x-large;
    display: flex; 
    align-items: center;
    justify-content: space-between;
`

const Text = styled.div``

const Icons = styled.div`
    display: flex;
    width: 6em;
    justify-content: space-evenly;
`

const Ad = styled.div`
    padding-left: 5%;
    padding-right: 5%;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: .3em;
`

export const SearchI = styled(BiSearch)``

export const SettingI = styled(IoSettingsOutline)``

export const MusicI = styled(IoMusicalNotesOutline)``

export const AddI = styled(BiMessageRoundedAdd)``

export default Chatpage;