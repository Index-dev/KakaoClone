import React from "react";
import styled from "styled-components";
import Topbar from "../../components/Main/Topbar";
import Nav from "../../components/Main/Nav";
import {FcFinePrint} from "react-icons/fc";

class Searchpage extends React.Component{
    state={
        input:'',
        url: 'https://m.search.naver.com/search.naver?where=m&sm=top_hty&fbm=1&ie=utf8&query='
    }

    changeItem = (e) => {
        this.setState({
          input: e.target.value
        });
    }

    createUrl = () => {
        if(this.state.input.length !== 0){
            this.setState({
                input: '',
                url: this.state.url+this.state.input
            }, () => {
                this.changeWindow();
            });
        }
    }

    changeWindow = () => {
       window.location=this.state.url;
    }

    Enterkey = () => {
    if (window.event.keyCode === 13) {
        this.createUrl();
        }
    }

    render(){
    const { input } = this.state;
    const {
        changeItem,
        createUrl,
        Enterkey
      } = this;

        return(
            <Frame>
                <Topbar></Topbar>
                <SFrame>
                    <InputF value={input} onKeyPress={Enterkey}onChange={changeItem}></InputF>
                    <Button onClick={createUrl}><Sicon></Sicon></Button>
                </SFrame>
                <Nav></Nav>
            </Frame>
        )
    }
}

const Frame = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 5% 85% 10%;
    grid-template-areas:
        "topbar"
        "search"
        "nav"
    ;
`;

const SFrame = styled.div`
    grid-area: search;
    display: flex; 
    align-items: center; 
    justify-content: center; 
`;

const InputF = styled.input`
    border: 2px solid;
    border-radius: 5px;
    height: 25px;
`;

const Button = styled.button`
    border: none;
    background: none;
    display: flex; 
    align-items: center; 
    justify-content: center; 

`;

export const Sicon = styled(FcFinePrint)`
    font-size: xx-large;

`

export default Searchpage;