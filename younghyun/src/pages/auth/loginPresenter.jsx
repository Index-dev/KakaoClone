import styled from "styled-components";
import ruinedCity from "assets/image/ruinedCity.jpg";

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: grid;
`;

const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url(${ruinedCity});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: -1;
`;

const LoginInfo = styled.div`
    width: 60%;
    border: 1px solid white;
`;

function LoginPresenter() {
    return (
        <Container>
            <BackgroundImage />
            <LoginInfo />
        </Container>
    );
}

export default LoginPresenter;
