import React from 'react';
import styled from "styled-components";
import Profile from "../Main/profile";
import Bprofile from "../../Photos/profile.png";

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
            <Out>
            <Line></Line>
            <FavFrame>
                <FTitle>즐겨찾기</FTitle>
                <FList>
                    <Fprofile>
                        <Fphoto>
                            <IMG src={Bprofile}></IMG>
                        </Fphoto>
                        <InfoF>
                            <Fname>김영희</Fname>
                            <Message>🧸</Message>
                        </InfoF>
                        <MDiv>
                            <Music>Cry for Me - Camila Cabello ▷</Music>
                        </MDiv>
                    </Fprofile>
                </FList>
            </FavFrame>
            <Line></Line>
            <FTitle>친구 3</FTitle>
            <Frame>
                <Fprofile>
                    <Fphoto>
                        <PButton onClick={this.toggleProfile.bind(this)}>
                        <IMG src={Bprofile}></IMG>
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
                        <IMG src={Bprofile}></IMG>
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
                        <IMG src={Bprofile}></IMG>
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
            </Out>
        )
    }
}

const Out = styled.div`
    grid-area: friendlist;
    padding-right: 3%;
`

const FavFrame = styled.div`

`

const FTitle = styled.div`
    font-weight: 100;
`

const FList = styled.div`
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(50px, 1fr));
    overflow: auto;
`

const Frame = styled.div`
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(50px, 1fr));
    overflow: auto;
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
    width: 2.2em;
    height: 2.2em;
    object-fit: cover;
    border-radius: .8em;
    border: 1px solid #ededed;
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
    padding-top: 1.5%;
    padding-bottom: 1.5%;
    padding-left: 3.5%;
    padding-right: 3.5%;
    border-color: #2ced1f;
`



const Line = styled.hr`
    border:none;
    width: 98%;
    height: 1px;
    background-color: lightgray;
    margin-left: 0;
`

export default Friends;