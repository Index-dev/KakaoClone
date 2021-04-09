import React from "react";
import styled from "styled-components";
import Topbar from "../../components/Main/Topbar";
import Nav from "../../components/Main/Nav";
import Info from "../../components/Sets/Info";
import {FcSettings} from "react-icons/fc";

class Settingpage extends React.Component{
    render(){
        return(
            <Frame>
                <Topbar></Topbar>
                <Title>설정<Searchicon/></Title>
                <Info>
                </Info>
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
    background-color: #ffe6e6;;
`


export const Searchicon = styled(FcSettings)`
    font-size: xx-large;
    padding-left: 1%;
`

export default Settingpage;