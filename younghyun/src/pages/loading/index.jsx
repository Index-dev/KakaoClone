import { useEffect } from "react";
import styled, { keyframes } from "styled-components";

function Loading(props) {
  return <LoadingContainer show={props.showProfile}></LoadingContainer>;
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

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  background-color: black;

  animation: ${OpenProfile} 0.1s linear;
  transform: translateY(0%);
  z-index: 100;
`;
