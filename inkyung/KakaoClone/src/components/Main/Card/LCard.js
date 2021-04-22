import React from "react";
import styled from "styled-components";

const LCard = ({ post, onToggle }) => {
    const { Friend_ID, NAME, PImg, PMusic, PMessage, Like } = post;

    return(
        <div>
            {Like?(
                <Fprofile>
                    <Fphoto>
                    <PButton onClick={() => onToggle(Friend_ID)}>
                    <IMG src={PImg}></IMG>
                    </PButton>
                </Fphoto>
                <InfoF>
                    <Fname>{NAME}</Fname>
                    <Message>{PMessage}</Message>
                </InfoF>
                <MDiv>
                    <Music>{PMusic}</Music>
                </MDiv>
                </Fprofile>
            ) : null}
            
        </div>
    )
}

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


export default LCard;