import React from "react";
import styled from "styled-components";

class Contents extends React.Component {
    render(){
        const { Friend_ID, showMessage,cTime } = this.props.value;

        return(
            <Frame>
                <Top></Top>
                <Chats></Chats>
                <Bottom></Bottom>
            </Frame>
        )
    }
}

const Frame = styled.div`
    min-width: 375px;
    max-width: 414px;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: #95b4bf;
    display: grid;
    grid-template-rows: 5% 83% 12%;
    grid-template-areas: 
        "backf"
        "contents"
        "bottom"
    ;
    z-index: 20;
`

const Top = styled.div`
    grid-area: backf;
`

const Chats = styled.div`
    grid-area: contents;
`

const Bottom = styled.div`
    grid-area: bottom;
`

export default Contents;