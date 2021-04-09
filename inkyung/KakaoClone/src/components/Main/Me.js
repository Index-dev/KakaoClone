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
                    <MDiv>
                        <Balloon>
                            <Fmessage>요건 내꺼 메세지</Fmessage>
                        </Balloon>
                    </MDiv>
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
    grid-template-columns: 25% auto 60%;
    grid-template-areas: "img name msg";
`

const ImgDiv = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center; 
`

const IMG = styled.img`
    display: flex;
    justify-content: center;
    text-align: center;
    width: 3.7em;
    height: 3.7em;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid gray;
`

const Name = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: left;
    padding-left: 10%;
`

const MDiv = styled.div`
    grid-area: msg;
    display: flex; 
    align-items: center; 
    justify-content: center;
`

const Balloon = styled.div`
    grid-area: msg;
    position: relative;
    width: 80%; 
    height: 50%;
    background: #ffe6e6; 
    border-radius: 10px;
    display: flex; 
    align-items: center; 
    justify-content: center;  

    &:after{
        border-top: 10px solid #ffe6e6; 
        border-left: 10px solid transparent; 
        border-right: 10px solid transparent; 
        border-bottom: 0px solid transparent; 
        content:""; 
        position:absolute;
        bottom:-10px;
        left: 30px;  
    }
`

const Fmessage = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center;  
`

export default Me;