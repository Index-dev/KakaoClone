import styled from "styled-components";
import Input from "components/input/login";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(1, 1fr);
  border: 1px solid white;
`;

function LoginTemplate() {
  return (
    <Container>
      <Input />
      <Input />
    </Container>
  );
}

export default LoginTemplate;
