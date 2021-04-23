import styled from "styled-components";
import Background from "components/chat/detail/backgroundEffect";
import Chat from "components/chat/detail/chat";
import hamberger from "assets/image/hamberger.png";

function ChatDetail() {
  return (
    <Container>
      <Background />
      <Header>
        <ArrowTitleContainer>
          <Arrow
            onClick={() => {
              window.location.href = "/chat";
            }}
          >
            &#10094;
          </Arrow>
          <Name>나와의 채팅</Name>
        </ArrowTitleContainer>
        <HambergerContainer>
          <Hamberger />
        </HambergerContainer>
      </Header>
      <Chat />
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

const ArrowTitleContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 1.5em;
`;

const Arrow = styled.div`
  cursor: pointer;
`;

const Name = styled.div``;

const HambergerContainer = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Hamberger = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${hamberger});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
