import React from 'react';
import styled from "styled-components";
import Profile from "../Main/profile";
import F1 from "../../Photos/F1.png";
import F2 from "../../Photos/F2.png";
import F3 from "../../Photos/F3.png";

class Friends extends React.Component {
    state={
        showProfile: false
    }

    toggleProfile() {
        this.setState({
            showProfile: !this.state.showProfile,
        });
      }

    render(){

        return(
            <div>
            <Frame>
                <Fprofile>
                    <Fphoto>
                        <PButton onClick={this.toggleProfile.bind(this)}>
                        <IMG src={F1}></IMG>
                        </PButton>
                    </Fphoto>
                    <InfoF>
                        <Fname>홍길동</Fname>
                        <Message>부릉부릉</Message>
                    </InfoF>
                    <MDiv>
                        <Music>작은 것들을 위한 시 - 방탄소년단 ▷</Music>
                   </MDiv>
                </Fprofile>
                <Fprofile>
                    <Fphoto>
                        <IMG src={F2}></IMG>
                    </Fphoto>
                    <InfoF>
                        <Fname>김철수</Fname>
                        <Message></Message>
                    </InfoF>
                    <MDiv>
                        <Music>Celebrity - 아이유 ▷</Music>
                   </MDiv>
                </Fprofile>
                <Fprofile>
                    <Fphoto>
                        <IMG src={F3}></IMG>
                    </Fphoto>
                    <InfoF>
                        <Fname>김영희</Fname>
                        <Message>🧸</Message>
                    </InfoF>
                   <MDiv>
                        <Music>Cry for Me - Camila Cabello ▷</Music>
                   </MDiv>
                </Fprofile>
            </Frame>
            {this.state.showProfile?(
                <Profile cancelProfile={this.toggleProfile.bind(this)}/>
            ) : null}
            </div>
        )
    }
}

const Frame = styled.div`
    grid-area: friendlist;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(50px, 1fr));
    overflow: auto;
    padding-right: 3%;
`

const Fprofile = styled.div`
    height: 60px;
    display: grid; 
    grid-template-columns: 18% 20% auto;
    grid-template-areas: "img name msg";
    &:hover {
        cursor: pointer;
        background-color: #dbdbdb;
    }
`

const Fphoto = styled.div`
    grid-area: img;
    display: flex; 
    align-items: center;
`

const IMG = styled.img`
    display: flex;
    justify-content: center;
    text-align: center;
    width: 2.6em;
    height: 2.2em;
    object-fit: cover;
    border-radius: 30%;
    border: 1px solid gray;
`

const PButton = styled.div`

`

const InfoF = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: space-evenly;
`

const Fname = styled.div`  
    grid-area: name;
    display: flex; 
    align-items: center; 
    font-weight: 550;
`

const Message = styled.div`
    font-size: small;
    font-weight: 250;
`

const MDiv = styled.div`
    grid-area: msg;
    display: flex; 
    align-items: center; 
    justify-content: flex-end;
`
const Music = styled.div`
    font-size: small;
    font-weight: 100;
    border: 1px solid gray;
    border-radius: 2em;
    padding-top: 3%;
    padding-bottom: 3%;
    padding-left: 5%;
    padding-right: 5%;
    border-color: #2ced1f;
`

export default Friends;