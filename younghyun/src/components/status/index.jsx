import styled from "styled-components";
import mic from "assets/image/mic.png";
import speaker from "assets/image/speaker.png";
import jayGLogo from "assets/image/jayGLogo.png";

function Status() {
  return (
    <Container>
      <Image width="20" height="16" image={mic} />
      <Image width="16" height="16" image={jayGLogo} />
      <Image width="20" height="16" image={speaker} />
    </Container>
  );
}

export default Status;

const Container = styled.div`
  width: 100%;
  height: 20px;

  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: rgba(254, 208, 0, 1);

  z-index: 99;
`;

const Image = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;
