import styled from "styled-components";
import HeaderNavSection from "components/layout/paddingSection";
import InfoContainer from "components/user/Info";
import jay_Z from "assets/image/jayZLogo.png";
import ryan from "assets/image/ryan.jpg";
import seulgi from "assets/image/seulgi.jpg";
import jin from "assets/image/jin.jpg";

function User() {
    return (
        <HeaderNavSection>
            <Container>
                <Title>친구</Title>
                <InfoContainer
                    name="JAY_Z"
                    statusText="헤헿"
                    image={jay_Z}
                    themeSong="Empire State Of Mind - jay_Z"
                />
                <LineDevider />
                <InfoContainer
                    name="Ryan"
                    statusText="교만X 자만X 겸손"
                    image={ryan}
                    themeSong=""
                />
                <InfoContainer
                    name="Ryan"
                    statusText="교만X 자만X 겸손"
                    image={ryan}
                    themeSong=""
                />
                <InfoContainer
                    name="Ryan"
                    statusText="교만X 자만X 겸손"
                    image={ryan}
                    themeSong=""
                />
                <InfoContainer
                    name="Ryan"
                    statusText="교만X 자만X 겸손"
                    image={ryan}
                    themeSong=""
                />
                <InfoContainer
                    name="슬기"
                    statusText=""
                    image={seulgi}
                    themeSong="Monster - 아이린 & 슬기"
                />
                <InfoContainer
                    name="진"
                    statusText=""
                    image={jin}
                    themeSong="쩔어 (Dope) - 방탄소년단"
                />
            </Container>
        </HeaderNavSection>
    );
}
export default User;

const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 1.7em;
    color: "#f7cb00";
`;

const Title = styled.div`
    width: 80%;
    padding: 0.8rem 0.5rem;
`;
const LineDevider = styled.div`
    width: 80%;
    border-bottom: 1px solid rgba(247, 203, 0, 0.5);
    margin-bottom: 0.8rem;
`;
