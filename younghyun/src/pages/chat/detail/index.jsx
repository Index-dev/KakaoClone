import styled from "styled-components";
import Background from "components/chat/detail/backgroundEffect";
function ChatDetail() {
  return (
    <Container>
      <Background />
      <Header>
        <Arrow></Arrow>
      </Header>
    </Container>
  );
}

export default ChatDetail;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Header = styled.div`
  width: 100%;
  height: 60px;
  position: absolute;
  top: 20px;
  display: flex;
  justify-content: space-between;
  background-color: rgba(247, 203, 0, 0.8);
`;

const Arrow = styled.div``;
