import styled, { keyframes } from "styled-components";
import Profile from "pages/profile";

function ProfileAnimation(props) {
    return (
        <ProfileContainer show={props.showProfile}>
            <Profile handleCloseProfile={props.handleCloseProfile} />
        </ProfileContainer>
    );
}
export default ProfileAnimation;

const OpenProfile = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const ProfileContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    background-color: black;

    animation: ${OpenProfile} 0.1s linear;
    transform: translateY(0%);
    z-index: 100;
`;
