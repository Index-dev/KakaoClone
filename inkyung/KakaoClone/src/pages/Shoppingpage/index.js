import React from "react";
import styled from "styled-components";
import Topbar from "../../components/Main/Topbar";
import Nav from "../../components/Main/Nav";
import {BiSearch} from "react-icons/bi";
import {IoSettingsOutline,IoMusicalNotesOutline} from "react-icons/io5";
import { AiOutlineScan } from "react-icons/ai";

class Shoppingpage extends React.Component{
    render(){
        return(
            <Frame>
                <Topbar></Topbar>
                <Title>
                    <Text>쇼핑</Text>
                    <Icons>
                        <SearchI/>
                        <ScanI/>
                        <MusicI/>
                        <SettingI/>
                    </Icons>
                </Title>
                <div/>
                <Nav></Nav>
            </Frame>
        )
    }
}

const Frame = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 5% 7% 78% 10%;
    grid-template-areas:
        "topbar"
        "title"
        "."
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

export const SearchI = styled(BiSearch)``

export const SettingI = styled(IoSettingsOutline)``

export const MusicI = styled(IoMusicalNotesOutline)``

export const ScanI = styled(AiOutlineScan)``

export default Shoppingpage;