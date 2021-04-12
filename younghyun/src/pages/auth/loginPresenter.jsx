import styled from "styled-components";
import ruinedCity from "assets/image/ruinedCity.jpg";

import LoginTemplate from "components/auth/loginTemplate";
import LoginForm from "components/auth/loginForm";

const Container = styled.div`
  width: 100%;
  height: ${window.innerHeight - 20}px;
  position: relative;
  background-color: rgba(0, 0, 0, 1);
  z-index: -1;
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(${ruinedCity});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 70%;
  z-index: -1;
`;

function LoginPresenter() {
  return (
    <Container>
      <BackgroundImage />
      <LoginTemplate>
        <LoginForm />
      </LoginTemplate>
    </Container>
  );
}

export default LoginPresenter;
