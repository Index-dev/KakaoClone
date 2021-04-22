import styled from "styled-components";
import melonLogo from "assets/image/melonLogo.png";

function Melon(props) {
    return (
        <Container>
            <ThemeSong>{props.title}</ThemeSong>
            <LogoContainer>
                <MelonLogo />
            </LogoContainer>
        </Container>
    );
}
export default Melon;

const Container = styled.div`
    width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 0.8em;

    padding: 0.2rem;
    border: 1px solid #00c73a;
    border-radius: 10px;
`;
const LogoContainer = styled.div`
    width: 10%;
`;
const MelonLogo = styled.div`
    width: auto;
    background-image: url(${melonLogo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    padding-bottom: 100%;
`;
const ThemeSong = styled.div`
    width: auto;
    font-size: 0.7em;
    opacity: 80%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;
