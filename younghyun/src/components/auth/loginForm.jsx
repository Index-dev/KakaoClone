import styled from "styled-components";
import Input from "components/input/login";

function LoginTemplate() {
  return (
    <Container>
      <LoginBox>
        <Input />
        <Input />
      </LoginBox>
      <Copyright>copyright by Jay-Z</Copyright>
    </Container>
  );
}

export default LoginTemplate;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.5);
`;
const LoginBox = styled.div`
  border: 1px solid red;
`;

const Copyright = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 0.3rem;
`;
