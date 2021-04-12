import styled from "styled-components";

const Container = styled.div`
  min-width: 320px;
  width: 60vw;
  max-width: 360px;
  min-height: 512px;
  height: 97.08vw;
  max-height: 582px;

  position: absolute;
  top: 38%;
  left: 50%;

  display: flex;
  justify-content: center;
  /* background-color: rgba(0, 0s, 0, 0.7); */
  transform: translateX(-50%) translateY(-38%);
  z-index: 1;
`;

function LoginTemplate({ children }) {
  return <Container>{children}</Container>;
}

export default LoginTemplate;
