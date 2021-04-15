import styled from "styled-components";
import Input from "components/input/login";

function LoginTemplate() {
    return (
        <Container>
            <LoginBox>
                <div />
                <CommentContainer>
                    <SubComment>제이지의</SubComment>
                    <MainComment>
                        <Emphasis>카카오톡</Emphasis>에 오신걸 환영합니다.
                    </MainComment>
                </CommentContainer>
                <Input placeholder="Jay@Z.com" />
                <Input placeholder="Password" />
                <div />
                <ButtonContainer>
                    <Button
                        onClick={() => {
                            window.location.href = "/friends";
                        }}
                    >
                        로그인
                    </Button>
                    <ButtonSubstring>
                        카카오톡 아이디가 없으신가요?{" "}
                        <RegisterLink
                            onClick={() => {
                                window.open(
                                    "https://accounts.kakao.com/weblogin/create_account?continue=https%3A%2F%2Faccounts.kakao.com%2Fweblogin%2Faccount%2Finfo"
                                );
                            }}
                        >
                            회원가입
                        </RegisterLink>
                    </ButtonSubstring>
                </ButtonContainer>
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
    background-color: rgba(0, 0, 0, 0.8);
`;
const LoginBox = styled.div`
    width: 80%;
    height: 70%;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    margin: 1rem;
`;

const CommentContainer = styled.div`
    font-size: 1.6em;
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

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;

    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Button = styled.div`
    width: 60%;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #534133;
    border-radius: 5px;

    margin-bottom: 0.2rem;

    cursor: pointer;
`;
const ButtonSubstring = styled.div`
    font-size: 0.8em;
    color: rgba(255, 255, 255, 0.5);
`;
const RegisterLink = styled.span`
    text-decoration: underline;
    cursor: pointer;
`;
