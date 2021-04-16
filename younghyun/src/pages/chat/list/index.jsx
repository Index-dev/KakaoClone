import styled from "styled-components";

function ChatList() {
    return <Container>chatList</Container>;
}

export default ChatList;

const Container = styled.div`
    width: 100%;
    height: ${window.innerHeight - 20}px;
    max-height: 900px;
    border: 1px solid black;
`;
