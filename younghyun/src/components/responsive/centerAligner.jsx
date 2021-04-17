import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  max-width: ${(props) => props.maxWidth};
  height: 100vh;
  max-height: 900px;

  position: relative;

  background-color: #070707;
  color: #f2f2f2;
`;

function CenterAligner({ children, maxWidth }) {
  return <Container maxWidth={maxWidth}>{children}</Container>;
}

export default CenterAligner;
