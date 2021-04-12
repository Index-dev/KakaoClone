import styled from "styled-components";
import Input from "components/input/login";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.5);
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
