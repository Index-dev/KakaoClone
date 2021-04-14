import styled from "styled-components";
import Input from "components/input/login";

function LoginTemplate() {
  return (
    <Container>
      <LoginBox>
        <CommentContainer>
          <SubComment>제이지의</SubComment>
          <MainComment>
            <Emphasis>카카오톡</Emphasis>에 오신걸 환영합니다.
          </MainComment>
        </CommentContainer>
        <Input />
        <Input />
        <div>
          <div>대충 로그인 버튼</div>
          <div>대충 회원가입 링크</div>
        </div>
      </LoginBox>
      <Copyright>
        copyright by Jay-Z &nbsp;&nbsp;contact: no@contact.com
      </Copyright>
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
  color: #ececec;
  background-color: rgba(0, 0, 0, 0.6);
`;
const LoginBox = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  border: 1px solid red;
  margin: 1rem;
`;

const CommentContainer = styled.div`
  font-size: 1.2em;
`;

const SubComment = styled.div`
  font-size: 0.7em;
  color: #574234;
`;

const MainComment = styled.div``;
const Emphasis = styled.span`
  font-weight: bold;
  color: #fed000;
`;

const Copyright = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.3rem;
`;
