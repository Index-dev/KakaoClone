import React from "react";
import styled from "styled-components";
import Nav from '../../components/Main/Nav';
import Me from '../../components/Main/Me';
import Friends from '../../components/Main/Friends';
import Topbar from "../../components/Main/Topbar";
import {BiSearch} from "react-icons/bi";
import {IoSettingsOutline,IoMusicalNotesOutline} from "react-icons/io5";
import { RiUserAddLine } from "react-icons/ri";

class Mainpage extends React.Component{
    render(){
        return(
            <Frame>
                <Topbar></Topbar>
                <Title>
                    <Text>친구</Text>
                    <Icons>
                        <SearchI/>
                        <AddI/>
                        <MusicI/>
                        <SettingI/>
                    </Icons>
                </Title>
                <List>
                    <Me></Me>
                    <Friends></Friends>
                </List>
                <Nav></Nav>
            </Frame>
        )
    }
}

const Frame = styled.div`
    height: 100vh;
    display: grid;
    align-content: center;
    grid-template-rows: 5% 7% 78% 10%;
    grid-template-areas:
        "topbar"
        "title"
        "list"
        "nav"
    ;
`

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

const List = styled.div`
    grid-area: list;
    padding-left: 5%;
    display: grid;
    grid-template-rows: 10% 68%;
    grid-template-areas: 
        "profile"
        "friendlist"
    ;
`;

const Icons = styled.div`
    display: flex;
    width: 6em;
    justify-content: space-evenly;
`

export const SearchI = styled(BiSearch)``

export const SettingI = styled(IoSettingsOutline)``

export const MusicI = styled(IoMusicalNotesOutline)``

export const AddI = styled(RiUserAddLine)``

export default Mainpage;