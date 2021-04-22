import React from 'react';
import styled from "styled-components";

class List extends React.Component {
    render(){
        const mymessage = this.props.post.text;
        return(
            <Chats>
                <Balloon>
                    <Text>{mymessage}</Text>
                </Balloon>
            </Chats>
        )
    }
}



const Chats = styled.div`

`

const Balloon = styled.div`
    position: relative;
    width: 150px;
    background: lightblue;
    font-size: smaller; 
    font-weight: 100; 
    float: right;
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
    border-width: 7px 0 7px 7px;
    border-color: transparent lightblue;
    display: block;
    width: 0;
    z-index: 1;
    right: -5px;
    top: 4px;
}
   }
`
const Text = styled.div`
    padding: 5px 6px 5px 6px;
`

export default List;