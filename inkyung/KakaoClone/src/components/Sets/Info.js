import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Me from '../../components/Main/Me';

class Info extends React.Component{
    render(){
        return(
            <Frame>
                <Infos>
                    <Me></Me>
                    <InfoL>
                        <Item>알림</Item>
                        <Item>채팅방</Item>
                        <Item>친구</Item>
                        <Item>
                        <Link to={"/"} style={{ textDecoration: "none" }}>로그아웃</Link>
                        </Item>
                    </InfoL>
                </Infos>
            </Frame>
        )
    }
}

const Frame = styled.div`
    grid-area: list;
    display: grid;
    grid-template-rows: auto;
    grid-template-areas:
        "infos"
    ;
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


export default Info;

