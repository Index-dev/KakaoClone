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
        console.log(this.state.showProfile)
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
                        <IMG src={F1}></IMG>
                    </Fphoto>
                    <Fname>친구1</Fname>
                    <MDiv>
                        <Balloon>
                            <Fmessage>메세지1~</Fmessage>
                        </Balloon>
                   </MDiv>
                </Fprofile>
                <Fprofile>
                    <Fphoto>
                        <IMG src={F2}></IMG>
                    </Fphoto>
                    <Fname>친구2</Fname>
                    <MDiv>
                        <Balloon>
                            <Fmessage>메세지2~</Fmessage>
                        </Balloon>
                   </MDiv>
                </Fprofile>
                <Fprofile>
                    <Fphoto>
                        <IMG src={F3}></IMG>
                    </Fphoto>
                    <Fname>친구3</Fname>
                   <MDiv>
                        <Balloon>
                            <Fmessage>메세지3~</Fmessage>
                        </Balloon>
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
    padding-top: 5%;
    grid-template-rows: repeat(auto-fill, minmax(60px, 1fr));
    overflow: auto;
`

const Fprofile = styled.div`
    height: 60px;
    display: grid; 
    grid-template-columns: 18% 27% 50%;
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
    width: 3em;
    height: 3em;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid gray;
`

const Fname = styled.div`   
    padding-left: 10%;
    grid-area: name;
    display: flex; 
    align-items: center; 
`

const MDiv = styled.div`
    grid-area: msg;
    display: flex; 
    align-items: center; 
    justify-content: center;
`

const Fmessage = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center;  
`

const Balloon = styled.div`
    position: relative;
    width: 100%; 
    height: 70%;
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

export default Friends;