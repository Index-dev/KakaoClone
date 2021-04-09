import React from "react";
import styled from "styled-components";
import Nav from '../../components/Main/Nav';
import Me from '../../components/Main/Me';
import Friends from '../../components/Main/Friends';
import Topbar from "../../components/Main/Topbar"
import {FcLike} from "react-icons/fc";

class Mainpage extends React.Component{
    render(){
        return(
            <Frame>
                <Topbar></Topbar>
                <Title>친구<Like/></Title>
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
    grid-template-rows: 5% 10% 75% 10%;
    grid-template-areas:
        "topbar"
        "title"
        "list"
        "nav"
    ;
`

const Title = styled.div`
    grid-area: title;
    padding-left: 10%;
    font-size: xx-large;
    display: flex; 
    align-items: center; 
    background-color: #ffe6e6;
`

const List = styled.div`
    grid-area: list;
    padding-left: 5%;
    display: grid;
    grid-template-rows: 15%;
    grid-template-areas: 
        "profile"
        "friendlist"
    ;
`;

export const Like = styled(FcLike)`
    font-size: xx-large;
    padding-left: 1%;
`

export default Mainpage;