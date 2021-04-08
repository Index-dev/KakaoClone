import React from 'react';
import styled from "styled-components";

class Me extends React.Component {
    render(){
        return(
            <Frame>
                <Profile>
                    <ImgDiv>
                        <IMG></IMG>
                    </ImgDiv>
                    <Name>寅卿</Name>
                </Profile>
            </Frame>
        )
    }
}

const Frame = styled.div`
    grid-area: profile;
`

const Profile = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 25% ;
    grid-template-areas: "img name";
`

const ImgDiv = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center; 
`

const IMG = styled.div`
    height: 70%;
    width: 100%;
    border-radius: 50%;
    background-color: pink;
`

const Name = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: left;
    padding-left: 10%;
`

export default Me;