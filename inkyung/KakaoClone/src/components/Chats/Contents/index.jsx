import React from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { BsList } from "react-icons/bs";
import Topbar from "../../Main/Topbar";
import InputForm from "./inputForm";
import List from "./chatList";

class Contents extends React.Component {
    state = {
        input: '',
        chats: []
      }
    
      changeItem = (e) => {
        this.setState({
          input: e.target.value
        });
      }
    
      createChat = () => {
        if(this.state.input.length !== 0){
          this.setState({
            input: '',
            chats: this.state.chats.concat({
              id: this.id++,
              text: this.state.input
            })
          });
        }
        else{
        }
      }
    
      Enterkey = () => {
        document.body.scrollTop = document.body.scrollHeight;
        if (window.event.keyCode === 13) {
          this.createChat();
        }
      }

    componentWillUnmount(){
        if(this.props.cancelP !== undefined) this.props.cancelP();
    }
    render(){
        const { showMessage,NAME } = this.props.post;
        const { input, chats } = this.state;
        const {
        changeItem,
        createChat,
        Enterkey,
        } = this;

        return(
            <Frame>
                <Top>
                    <Topbar/>
                    <Back>
                        <BackI onClick={() => this.props.cancelChat()}/>
                        <Name>{NAME}</Name>
                        <BurgerI/>
                    </Back>
                </Top>
                <Together>
                <Friends>
                { showMessage === undefined ? null
                :
                <Chats>
                  <Balloon>
                    <Text>{showMessage}</Text>
                  </Balloon>
                </Chats>
                }
                </Friends>
                <ListF>
                <MyFrame>
                  {chats.map((item, index) => (
                        <List key={index} post={item}></List> 
                    ))}</MyFrame>
                </ListF></Together>
                <Bottom>
                <InputForm 
                    value={input}
                    onKeyPress={Enterkey}
                    onChange={changeItem}
                    onCreate={createChat}
                    />
                </Bottom>
            </Frame>
        )
    }
}

const Frame = styled.div`
    min-width: 375px;
    max-width: 414px;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: #95b4bf;
    display: grid;
    grid-template-rows: 10% 84% 6%;
    grid-template-areas: 
        "backf"
        "contents"
        "bottom"
    ;
    z-index: 20;
`

const Top = styled.div`
    grid-area: backf;
    display: flex;
    flex-direction: column;
`

const Back = styled.div`
   font-weight: 200;
    height: 100%;
    padding-left: 2%;
    padding-right: 2%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Name = styled.div``

const ListF = styled.div`
  grid-area: contents;
  height: 100%;
`
const Chats = styled.div`
  padding-bottom: 20px;
`
const Friends = styled.div`

`

const Together = styled.div`
  padding-left: 3%;
  padding-right: 3%;
  overflow: auto;

`

const Balloon = styled.div`
  position: relative;
  width: 150px;
  background: pink;
  font-size: smaller; 
  font-weight: 100; 
  position: relative;
  min-width: 150px;
  max-width: 200px;
  padding: 0px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;

 :after { 
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 7px 7px 7px 0;
    border-color: transparent pink;
    display: block;
    width: 0;
    z-index: 1;
    left: -5px;
    top: 4px;
   }
`

const Bottom = styled.div`
    grid-area: bottom;
    background-color: white;
`

const MyFrame = styled.div`
  grid-area: contents;
  display: grid;
  grid-gap: 20px;
`

const Text = styled.div`
    padding: 5px 6px 5px 6px;
`

export const BackI = styled(IoIosArrowBack)`
font-size: xx-large;
`
export const BurgerI = styled(BsList)`
font-size: xx-large;
`

export default Contents;