import React from "react";
import styled from "styled-components";
import {FcSettings} from "react-icons/fc";
import Me from '../../components/Main/Me';

class Info extends React.Component{
    render(){
        return(
            <Frame>
                <Title>설정<Searchicon/></Title>
                <Infos>
                    <Me></Me>
                    <InfoL>
                        <Item>알림</Item>
                        <Item>채팅방</Item>
                        <Item>친구</Item>
                        <Item>로그아웃</Item>
                    </InfoL>
                </Infos>
            </Frame>
        )
    }
}

const Frame = styled.div`
    grid-area: list;
    display: grid;
    grid-template-rows: 10% auto;
    grid-template-areas:
        "title"
        "infos"
    ;
`

const Title = styled.div`
    grid-area: title;
    padding-left: 10%;
    font-size: xx-large;
    display: flex; 
    align-items: center; 
    background-color: #f5f5f5;
`

const Infos = styled.div`
    padding-left: 10%;
    grid-area: infos;
    display: grid;
    grid-template-rows: 15% auto;
    grid-template-areas:
        "profile"
        "infolist"
    ;
`

const InfoL = styled.div`
    grid-area: infolist;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(50px, 1fr));
    overflow: auto;
`

const Item = styled.div`
    display: flex; 
    align-items: center; 
    font-size: x-large;

    &:hover {
        cursor: pointer;
        background-color: #f5f5f5;
    }
`

export const Searchicon = styled(FcSettings)`
    font-size: xx-large;
    padding-left: 1%;
`

export default Info;

