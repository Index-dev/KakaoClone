import React from "react";
import styled from "styled-components";
import Topbar from "../../components/Main/Topbar";
import Nav from "../../components/Main/Nav";
import Contents from "../../components/Shopping/Contents";
import {IoSettingsOutline,IoMusicalNotesOutline} from "react-icons/io5";
import { AiOutlineScan,AiOutlineGift } from "react-icons/ai";
import { BiStoreAlt } from "react-icons/bi";
import { RiBearSmileLine } from "react-icons/ri";
import { MdLiveTv } from "react-icons/md";
import { SiMakerbot } from "react-icons/si";

class Shoppingpage extends React.Component{
    render(){
        return(
            <Frame>
                <Topbar></Topbar>
                <Title>
                    <Text>쇼핑</Text>
                    <Icons>
                        <ScanI/>
                        <MusicI/>
                        <SettingI/>
                    </Icons>
                </Title>
               <Grid>
                    <Tab>
                        <Item>
                            <GiftI/>
                            <Name>선물하기</Name>
                        </Item>
                        <Item>
                            <StoreI/>
                            <Name>쇼핑하기</Name>
                        </Item>
                        <Item>
                            <MakerI/>
                            <Name>메이커스</Name>
                        </Item>
                        <Item>
                            <EmojiI/>
                            <Name>프렌즈</Name>
                        </Item>
                        <Item>
                            <LiveI/>
                            <Name>쇼핑라이브</Name>
                        </Item>
                    </Tab>
                    <Out>
                        <Contents/>
                    </Out>
               </Grid>
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
        "G"
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
    width: 4.6em;
    justify-content: space-evenly;
`

const Item = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center; 
    justify-content: center; 

    &:hover {
        cursor: pointer;
        background-color: #f5f5f5;
    }
`

const Name = styled.div`
    font-weight: 100;
    font-size: smaller;
    color:gray;
`

const Grid = styled.div`
    grid-area: G;
    height:100%;
    width: 100%;
    overflow: auto;
    display: grid;
    grid-template-rows: 12% 90%;
    grid-template-areas:
        "tab"
        "content"
    ;
    ::-webkit-scrollbar {
        display: none;
    }
`

const Tab = styled.div`
    grid-area: tab;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;   
    align-items: center; 
`

const Out = styled.div`
    grid-area: content;
    
`

export const SettingI = styled(IoSettingsOutline)``

export const MusicI = styled(IoMusicalNotesOutline)``

export const ScanI = styled(AiOutlineScan)``

export const GiftI = styled(AiOutlineGift)`
font-size: xx-large;
`

export const StoreI = styled(BiStoreAlt)`
font-size: xx-large;
`

export const LiveI = styled(MdLiveTv)`
font-size: xx-large;
`

export const EmojiI = styled(RiBearSmileLine)`
font-size: xx-large;
`

export const MakerI = styled(SiMakerbot)`
font-size: xx-large;
`


export default Shoppingpage;