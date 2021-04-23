import styled from "styled-components";
import background from "assets/image/kakaoBackground.jpg";
import closeButton from "assets/image/closeButton.png";
import avartar from "assets/image/jayZLogo.png";

function Profile(props) {
  return (
    <Container>
      <CloseButton onClick={props.handleCloseProfile} />
      <AvartarSubText>헤헷</AvartarSubText>
      <AvatarContainer>
        <Avartar />
        <AvartarName>제이지</AvartarName>
        <Functions>
          <EachFunction
            onClick={() => {
              window.location.href = "chat/detail";
            }}
          >
            talk
          </EachFunction>
          <EachFunction>call</EachFunction>
          <EachFunction>SNS</EachFunction>
        </Functions>
      </AvatarContainer>
    </Container>
  );
}
export default Profile;

const Container = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  color: white;

  ::after {
    content: "";
    width: 100%;
    height: 100%;

    position: absolute;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0.6;
  }
`;
const CloseButton = styled.div`
  width: 16px;
  height: 16px;

  position: absolute;
  top: 6%;
  right: 6%;

  background-image: url(${closeButton});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  opacity: 0.7;
  z-index: 101;
  cursor: pointer;
`;

const AvatarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  z-index: 101;
`;

const Avartar = styled.div`
  width: 60px;
  height: 60px;

  background-image: url(${avartar});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  border-radius: 10px;
`;

const AvartarName = styled.div`
  margin-top: 0.7rem;
`;
const AvartarSubText = styled.div``;

const Functions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 2rem 0;
`;

const EachFunction = styled.div`
  dispay: flex;
  justify-content: center;
`;
