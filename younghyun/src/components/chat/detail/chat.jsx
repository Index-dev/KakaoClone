import styled from "styled-components";

function Chat() {
  return (
    <Container>
      <TalkContainer>
        <RightTalk>
          <TimeStamp>11시 32분</TimeStamp>
          <RightTalkBox>hi</RightTalkBox>
        </RightTalk>
        <LeftTalk>
          <LeftTalkBox>hi</LeftTalkBox>
          <TimeStamp>11시 32분</TimeStamp>
        </LeftTalk>
      </TalkContainer>
      <TalkContainer>
        <RightTalk>
          <TimeStamp>12시 1분</TimeStamp>
          <RightTalkBox>두부 1모, 불닭볶음면</RightTalkBox>
        </RightTalk>
        <LeftTalk>
          <LeftTalkBox>두부 1모, 불닭볶음면</LeftTalkBox>
          <TimeStamp>12시 1분</TimeStamp>
        </LeftTalk>
      </TalkContainer>
      <InputBar>
        <InputContainer>
          <Input />
        </InputContainer>
      </InputBar>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  max-width: 100%;
  height: 80%;
  max-height: 100%;
  position: relative;
  padding: 100px 20px 50px 20px;
`;

const TalkContainer = styled.div`
  margin: 1rem 0;
`;
const RightTalk = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const RightTalkBox = styled.div`
  color: black;
  background-color: rgba(247, 203, 0, 1);
  border-radius: 10px;
  padding: 0.5rem 2rem;
  border: 1px solid black;
`;
const LeftTalk = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const LeftTalkBox = styled.div`
  color: rgba(247, 203, 0, 1);
  background-color: black;
  border-radius: 10px;
  padding: 0.5rem 2rem;
  border: 1px solid rgba(247, 203, 0, 1);
`;

const TimeStamp = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
  font-size: 0.8em;
  padding: 0 0.3rem 0.7rem 0.3rem;
`;

const InputBar = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(247, 203, 0, 0.7);
`;

const InputContainer = styled.div`
  width: 80%;
  height: 80%;

  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid rgba(247, 203, 0);
  border-radius: 50px;
`;
const Input = styled.input`
  width: 80%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);

  outline: none;
  border: none;
`;
