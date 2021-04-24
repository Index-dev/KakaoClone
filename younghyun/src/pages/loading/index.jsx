import { useEffect } from "react";
import styled, { keyframes } from "styled-components";

function Loading() {
  function openUsers() {
    window.location.href = "user";
  }
  useEffect(() => {
    setTimeout(openUsers, 1200);
  });
  return (
    <Container>
      <TextAligner>
        <Text>
          NOW L <BounceBall />
          &nbsp;ADING
        </Text>
      </TextAligner>
    </Container>
  );
}

export default Loading;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextAligner = styled.div`
  position: relative;
  display: flex;
`;

const bounce = keyframes`
    0% {
    top: 30px;
    height: 5px;
    border-radius: 60px 60px 20px 20px;
    transform: scaleX(2);
  }
  35% {
    height: 15px;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 0;
  }
`;

const BounceBall = styled.div`
  width: 20px;
  height: 37px;
  display: inline-block;
  &:before {
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    display: block;
    background-color: #f2f2f2;
    transform-origin: 50%;
    border-radius: 50%;
    animation: ${bounce} 0.5s alternate infinite ease;
  }
`;

const Text = styled.div`
  display: inline-block;
  color: #fed000;
  font-size: 1.7em;
  margin-left: 5px;
`;
