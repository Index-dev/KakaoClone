import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  max-width: 500px;
  height: 100vh;
  max-height: 900px;

  overflow: auto;

  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function PaddingContainer({ children }) {
  return <Container>{children}</Container>;
}

export default PaddingContainer;
