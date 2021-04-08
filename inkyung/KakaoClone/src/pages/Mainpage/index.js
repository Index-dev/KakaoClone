import React from "react";
import styled from "styled-components";
import Nav from '../../components/Main/Nav';
import Me from '../../components/Main/Me';
import Friends from '../../components/Main/Friends';
import Topbar from "../../components/Main/Topbar"

class Mainpage extends React.Component{
    render(){
        return(
            <Frame>
                <Topbar></Topbar>
                <Title>우리는 칭구칭구!</Title>
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
    grid-template-rows: 5% 5% 80% 10%;
    grid-template-areas:
        "topbar"
        "title"
        "list"
        "nav"
    ;
    
`

const Title = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: left; 
    font-weight: bold;
    font-size: x-large;
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

export default Mainpage;