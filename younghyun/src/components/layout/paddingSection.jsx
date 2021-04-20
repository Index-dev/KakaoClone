import styled from "styled-components";

function PaddingContainer({ children }) {
  return (
    <HeaderNavSection>
      <Container>
        <Component>{children}</Component>
      </Container>
    </HeaderNavSection>
  );
}

export default PaddingContainer;

const HeaderNavSection = styled.div`
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
const Container = styled.div`
  padding: 20px 0 50px 0;
`;

const Component = styled.div`
  overflow: auto;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
