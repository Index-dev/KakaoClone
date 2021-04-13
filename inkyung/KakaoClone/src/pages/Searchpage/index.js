import React from "react";
import styled from "styled-components";
import Topbar from "../../components/Main/Topbar";
import Nav from "../../components/Main/Nav";
import Tab from "../../components/Search/Tab";
import Contents from "../../components/Search/Contents";
import {BiSearch} from "react-icons/bi";

class Searchpage extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
          position: 0,
          input:'',
          url: 'https://m.search.naver.com/search.naver?where=m&sm=top_hty&fbm=1&ie=utf8&query=',
          show: true
        }
      }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
        const position = this.ref.scrollTop;
        this.setState({position});
      };
    
      componentWillUnMount = () => {
        window.removeEventListener('scroll', this.handleScroll);
      };
     
    handleScroll = () => {
        if(this.state.position <= this.ref.scrollTop){
            //초기 위치값이 지금보다 작으면 내려와 있음.
            this.setState({show : false})
        }
        else{
            this.setState({show : true})
        }
        this.setState({position : this.ref.scrollTop})
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
    const {input, show} = this.state;
    const {
        changeItem,
        createUrl,
        Enterkey,
        handleScroll
      } = this;

        return(
            <Frame>
                <Topbar></Topbar>
                <Tab/>
                <Out>
                    <Grid ref={(ref)=>{this.ref=ref}} onScroll={handleScroll}>
                        <Contents/>
                    </Grid>
                    {show ? 
                    <C>
                        <SearchF>
                            <InputF>
                                <Text>#</Text>
                                <Input placeholder="검색어를 입력해주세요"
                                 value={input} onKeyPress={Enterkey}onChange={changeItem}>

                                 </Input>
                                <Button onClick={createUrl}><SearchI/></Button>
                            </InputF>
                        </SearchF>
                    </C> 
                    : <div/>}
                </Out>
                <Nav></Nav>
            </Frame>
        )
    }
}

const C = styled.div`
    position: relative;
    top: -15%;
    z-index: 0;
`

const Out = styled.div`
    grid-area: search;

`

const Grid = styled.div`
    height:100%;
    width: 100%;
    overflow: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`

const Frame = styled.div`
    height: 100vh;  
    display: grid;
    grid-template-rows: 5% 7% 78% 10%;
    grid-template-areas:
        "topbar"
        "tab"
        "search"
        "nav"
    ;
`;

const SearchF = styled.div`
    background-color: white;
    height: 5em;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    display: flex;
    justify-content: center;
    padding-top: .8em
`

const InputF = styled.div`
    border: 2.8px solid #fae64d;
    border-radius: .4em;
    height: 1.5em;
    width: 90%;
    display: flex; 
    align-items: center; 
    justify-content: center; 

`;

const Input = styled.input`
    height: 90%;
    width: 90%;
    padding: 0;
    border: 0;

    ::placeholder{
        color: #c9c9c9;
        font-weight: 100;
        font-size: large;
    }
`

const Text = styled.div`
    font-weight: 100;
    color: #fae64d;
    font-size: larger;
    padding-left: 3%;
    padding-right: 3%;
`

const Button = styled.button`
    border: none;
    background: none;
    display: flex; 
    align-items: center; 
    justify-content: center; 
`;

export const SearchI = styled(BiSearch)`
    font-size: x-large;
`

export default Searchpage;