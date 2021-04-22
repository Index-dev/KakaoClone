import React from "react";
import styled from "styled-components";
import { FaBlackberry, FaExchangeAlt, FaGratipay } from "react-icons/fa";

class Tab extends React.Component{
    constructor(){
        super();
        this.state = {
            ck: '',
            styles : [
                false,
                false,
                true,
                false,
                false,
                false,
                false,
                false,
                false,
                false
            ]
        }
    }

    focusing = (e) => {
        const modify = this.state.styles.map(
            item =>
            item === true ? (false) : item
        )

        this.state.styles = modify.map(
            (item,index) =>
            index === e ? (true) : item
        )  
        this.setState({
                ck: 'change'
        })
    }

    render(){
        return(
            <Div> 
            <Flx>
                <Frame>
                    <B onClick={() => this.focusing(0)}><Tab1 value={this.state.styles[0]}><div>코로나19</div></Tab1></B>
                    <B onClick={() => this.focusing(1)}><Tab2 value={this.state.styles[1]}><div>톡업데이트</div></Tab2></B>
                    <B onClick={() => this.focusing(2)}><Tab3 value={this.state.styles[2]}><div>#뉴스</div></Tab3></B>
                    <B onClick={() => this.focusing(3)}><Tab4 value={this.state.styles[3]}>카카오TV</Tab4></B>
                    <B onClick={() => this.focusing(4)}><Tab5 value={this.state.styles[4]}>쇼핑</Tab5></B>
                    <B onClick={() => this.focusing(5)}><Tab6 value={this.state.styles[5]}>FUN</Tab6></B>
                    <B onClick={() => this.focusing(6)}><Tab7 value={this.state.styles[6]}>연예</Tab7></B>
                    <B onClick={() => this.focusing(7)}><Tab8 value={this.state.styles[7]}>공연</Tab8></B>
                    <B onClick={() => this.focusing(8)}><Tab9 value={this.state.styles[8]}>뮤직</Tab9></B>
                    <B onClick={() => this.focusing(9)}><Tab10 value={this.state.styles[9]}>스포츠</Tab10></B>
                </Frame>
                </Flx>
            <Flx>
                <Modify><FaExchangeAlt/></Modify>
            </Flx>
            </Div>
        )
    }

}

const Div = styled.div`
    grid-area: tab;
    display: grid;
    grid-template-columns: 90% 10%;
    grid-template-areas: "info button";
    width: 100vw;
`

const Frame = styled.div`
    font-weight: 200;
    height: 100%;
    font-size: larger;
    grid-area: info;
    width: fit-content;
    display: flex;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    width: 90vw;
    ::-webkit-scrollbar {
        display: none;
    }
`

const Flx = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center; 
`

const Tab1 = styled.div`
    height: 98%;
    display: flex; 
    align-items: center; 
    justify-content: center; 
    color: ${props => props.value ? 'black' : 'lightgray'};
    border-bottom: ${props => props.value ? '2px solid black' : 'none'};
`
const Tab2 = styled.div`
    height: 98%;
    display: flex; 
    align-items: center; 
    justify-content: center; 
    color: ${props => props.value ? 'black' : 'lightgray'};
    border-bottom: ${props => props.value ? '2px solid black' : 'none'};
`
const Tab3 = styled.div`
    height: 98%;
    display: flex; 
    align-items: center; 
    justify-content: center; 
    color: ${props => props.value ? 'black' : 'lightgray'};
    border-bottom: ${props => props.value ? '2px solid black' : 'none'};
`
const Tab4 = styled.div`
    height: 98%;
    display: flex; 
    align-items: center; 
    justify-content: center; 
    color: ${props => props.value ? 'black' : 'lightgray'};
    border-bottom: ${props => props.value ? '2px solid black' : 'none'};
`
const Tab5 = styled.div`
    height: 98%;
    display: flex; 
    align-items: center; 
    justify-content: center; 
    color: ${props => props.value ? 'black' : 'lightgray'};
    border-bottom: ${props => props.value ? '2px solid black' : 'none'};
`
const Tab6 = styled.div`
    height: 98%;
    display: flex; 
    align-items: center; 
    justify-content: center; 
    color: ${props => props.value ? 'black' : 'lightgray'};
    border-bottom: ${props => props.value ? '2px solid black' : 'none'};
`
const Tab7 = styled.div`
    height: 98%;
    display: flex; 
    align-items: center; 
    justify-content: center; 
    color: ${props => props.value ? 'black' : 'lightgray'};
    border-bottom: ${props => props.value ? '2px solid black' : 'none'};
`
const Tab8 = styled.div`
    height: 98%;
    display: flex; 
    align-items: center; 
    justify-content: center; 
    color: ${props => props.value ? 'black' : 'lightgray'};
    border-bottom: ${props => props.value ? '2px solid black' : 'none'};
`
const Tab9 = styled.div`
    height: 98%;
    display: flex; 
    align-items: center; 
    justify-content: center; 
    color: ${props => props.value ? 'black' : 'lightgray'};
    border-bottom: ${props => props.value ? '2px solid black' : 'none'};
`
const Tab10 = styled.div`
    height: 98%;
    display: flex; 
    align-items: center; 
    justify-content: center; 
    color: ${props => props.value ? 'black' : 'lightgray'};
    border-bottom: ${props => props.value ? '2px solid black' : 'none'};
`

const Modify = styled.div`
    grid-area: button;
`

const B = styled.button`
    border: none;
    background-color: transparent;
`

export default Tab;