import React from 'react';
import styled from "styled-components";
import { MdFace } from "react-icons/md";
import { BsPlusSquare } from "react-icons/bs";

const InputForm = ({value, onChange, onKeyPress}) => {
    return (
        <Frame>
            <Button><Plus/>
          </Button>
          <IFrame>
              <Input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
              <EmojiI/>
              <Text>#</Text>
          </IFrame>
          
        </Frame>
    );
};
    
const Frame = styled.div`
    display: flex;
    z-index: 10;
`

const IFrame = styled.div`
    margin-top: 1%;
    border: 2.8px solid lightgray;
    border-radius: 1em;
    height: 1.5em;
    width: 85%;
    display: flex; 
    align-items: center; 
    justify-content: space-around;
`;

const Input = styled.input`
    margin-left: 3%;
    height: 90%;
    width: 82%;
    padding: 0;
    border: 0;
    background-color: transparent;
    :focus{
        outline:none;
    }
`

const Text = styled.div`
    font-weight: 100;
    color: gray;
    font-size: larger;
    padding-left: 2%;
    padding-right: 2%;
`

const Button = styled.button`
    width: 11%;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-radius: 3px;
    background: none;
    border: none;
    font-weight: 600;
    cursor: pointer;
`

export const EmojiI = styled(MdFace)`
color: gray;
font-size: xx-large;
`
export const Plus = styled(BsPlusSquare)`
color: gray;
font-size: x-large;
`

export default InputForm;