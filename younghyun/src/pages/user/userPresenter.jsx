import styled from "styled-components";
import HeaderNavSection from "components/layout/paddingSection";
import InfoContainer from "components/user";
import Profile from "pages/profile/animation";

import jay_Z from "assets/image/jayZLogo.png";
import ryan from "assets/image/ryan.jpg";
import apeach from "assets/image/apeach.jpg";
import bumsu from "assets/image/bumsu.jpg";
import elonMusk from "assets/image/elonMusk.jpg";
import christopher from "assets/image/christopher.png";
import seulgi from "assets/image/seulgi.jpg";
import jin from "assets/image/jin.jpg";
import unknown from "assets/image/unknown.png";

function User(props) {
  return (
    <HeaderNavSection>
      {props.dontShowLoad && props.showProfile && (
        <Profile
          showProfile={props.showProfile}
          handleCloseProfile={props.handleCloseProfile}
        />
      )}
      <Container>
        <Title>친구</Title>
        <InfoContainer
          name="제이지"
          statusText="헤헿"
          image={jay_Z}
          themeSong="Empire State Of Mind - jay_Z"
          onClick={props.handleShowProfile}
        />
        <LineDevider />
        <InfoContainer
          name="재수없는 라이언"
          statusText="교만X 자만X 겸손"
          image={ryan}
          themeSong=""
        />
        <InfoContainer
          name="피치"
          statusText="술이 달다"
          image={apeach}
          themeSong="지친하루 (With 곽진언, 김필) - 윤종신"
        />
        <InfoContainer
          name="범수형"
          statusText="카카오 의장 김범수 입니다"
          image={bumsu}
          themeSong=""
        />
        <InfoContainer
          name="머스크 형"
          statusText="안냐세여~~ 일론 머스큽니다"
          image={elonMusk}
          themeSong=""
        />
        <InfoContainer
          name="Christopher"
          statusText=""
          image={christopher}
          themeSong="Just So You Know - christopher"
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
        <InfoContainer name="친구" statusText="" image={unknown} themeSong="" />
        <InfoContainer name="친구" statusText="" image={unknown} themeSong="" />
        <InfoContainer name="친구" statusText="" image={unknown} themeSong="" />
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
