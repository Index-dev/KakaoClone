import React from 'react';
import styled from "styled-components";
import Myphoto from "../../Photos/Me.png";

class Me extends React.Component {
    render(){
        return(
            <Frame>
                <Profile>
                    <ImgDiv>
                        <IMG src={Myphoto}></IMG>
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
    grid-template-columns: 20% auto 60%;
    grid-template-areas: "img name";
`

const ImgDiv = styled.div`
    display: flex; 
    align-items: center; 
`

const IMG = styled.img`
    display: flex;
    justify-content: center;
    text-align: center;
    width: 2.9em;
    height: 2.9em;
    object-fit: cover;
    border-radius: 1em;
    border: 1px solid #ededed;
`

const Name = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: left;
`

export default Me;