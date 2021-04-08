import React from "react";
import styled from "styled-components";
import Topbar from "../../components/Main/Topbar";
import Nav from "../../components/Main/Nav";
import Info from "../../components/Sets/Info";

class Settingpage extends React.Component{
    render(){
        return(
            <Frame>
                <Topbar></Topbar>
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
    grid-template-rows: 5% 85% 10%;
    grid-template-areas:
        "topbar"
        "list"
        "nav"
    ;
`;

export default Settingpage;