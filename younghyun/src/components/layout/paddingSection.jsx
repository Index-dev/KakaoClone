import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: auto;

  padding: 20px 0 50px 0;
`;

function PaddingContainer({ children }) {
  return <Container>{children}</Container>;
}

export default PaddingContainer;
