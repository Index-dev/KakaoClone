import styled, { keyframes, css } from "styled-components";
import Profile from "pages/profile";

function ProfileAnimation(props) {
  return (
    <ProfileContainer show={props.showProfile}>
      <Profile />
    </ProfileContainer>
  );
}
export default ProfileAnimation;

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
const ProfileContainer = styled.div`
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
