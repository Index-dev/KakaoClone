import styled from "styled-components";
import ruinedCity from "assets/image/ruinedCity.png";

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
    filter: sepia(50%) grayscale(80%);
`;

const LoginInfo = styled.div``;

function LoginPresenter() {
    return (
        <Container>
            <BackgroundImage />
            <LoginInfo />
        </Container>
    );
}

export default LoginPresenter;
