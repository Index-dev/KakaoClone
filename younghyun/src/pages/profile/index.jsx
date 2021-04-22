import styled, { keyframes, css } from "styled-components";

function Profile(props) {
  return <Container show={props.showProfile}></Container>;
}
export default Profile;

const OpenProfile = keyframes`
  0%{
    transform: translateY(100%);
  }
  100%{
    transform: translateY(0%);
  }
`;
const CloseProfile = keyframes`
  0%{
    transform: translateY(0%);
  }
  100%{
    transform: translateY(100%);
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  background-color: black;

  ${(props) =>
    props.show
      ? css`
          animation: ${OpenProfile} 0.2s linear;
          transform: translateY(0%);
        `
      : css`
          animation: ${CloseProfile} 0.2s linear;
          transform: translateY(100%);
        `};
  z-index: 100;
`;
