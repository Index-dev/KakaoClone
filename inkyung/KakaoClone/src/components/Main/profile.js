import React from 'react';
import styled from "styled-components";
import F1 from "../../Photos/F1.png";

class Profile extends React.Component {
    render(){
        return(
            <Frame>
                <Cancel>
                    <CClick onClick={this.props.cancelProfile}>X</CClick>
                    <ImgF>
                        <Fphoto>
                            <IMG src={F1}></IMG>
                        </Fphoto>
                        <Fname>친구1</Fname>
                        <Fmessage>메세지1~</Fmessage>
                    </ImgF>
                    <Bottom></Bottom>
                </Cancel>
            </Frame>
        )
    }
}

const Frame = styled.div`
    z-index: 10;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: lightgray;
    display: grid;
    grid-template-rows: 5% auto 10%;
    grid-template-areas: 
        "cancel"
        "imgf"
        "bottom"
    ;
`

const Cancel = styled.div`
    grid-area: cancel;
`

const CClick = styled.button`

`

const Fphoto = styled.div`
    grid-area: img;
    display: flex; 
    align-items: center;
`

const ImgF = styled.div`
    grid-area: imgf;
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

const Fmessage = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center;  
`

const Bottom = styled.div`
    grid-area: bottom;
`

export default Profile;