import styled from "styled-components";
import HeaderNavSection from "components/layout/paddingSection";
import bebeskin from "assets/image/bebeskin.png";
import dam from "assets/image/dam.png";
import husband from "assets/image/husband.png";
import estee from "assets/image/estee.jpg";

function Issue() {
  return (
    <HeaderNavSection>
      <Container>
        <Title>Fun</Title>
        <Advertise>
          <AdvertiseText>
            <Emphasis>베베스킨 친환경 섬유유연제</Emphasis>
            "이거 쓰고부터 아이가 긁지 않아요~!"
          </AdvertiseText>
          <AdvertiseImage />
        </Advertise>
        <TextContent>컷트+다운펌 45000원.jpg</TextContent>
        <TextContent>베이컨 박혀있는 도넛의 충격적인 맛</TextContent>
        <TextContent>저가 코스프레좌 신작</TextContent>
        <TextContent>
          김종국이 근육을 왜 키우는지 정말로 궁금했던 동생.gif
        </TextContent>
        <TextContent>연우 데뷔 전 사진들</TextContent>
      </Container>
      <ContentContainer>
        <PhotoContent>
          <Photo image={dam} />
          댐의 원리를 몸으로 표현한 친구
        </PhotoContent>
        <PhotoContent>
          <Photo image={husband} />
          남편이 술먹고 들어와 한 짓
        </PhotoContent>
      </ContentContainer>
      <PhotoAdvertise />
    </HeaderNavSection>
  );
}
export default Issue;

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

const Advertise = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`;
const AdvertiseText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 0.5em;
`;
const Emphasis = styled.div`
  font-size: 1.4em;
`;
const AdvertiseImage = styled.div`
  width: 80px;
  height: 80%;
  background-image: url(${bebeskin});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const TextContent = styled.div`
  width: 90%;
  height: 30px;
  display: flex;
  align-items: center;

  font-size: 0.7em;
  padding: 0.5rem 0 0.5rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);

  :last-child {
    border-bottom: none;
  }
`;
const ContentContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  padding-bottom: 1rem;
  border-top: 5px solid rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;
const PhotoContent = styled.div`
  width: 40%;
  height: 80%;
`;

const Photo = styled.div`
  height: 90%;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 0.3rem;
  border-radius: 5px;
`;

const PhotoAdvertise = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${estee});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 0.3rem;
`;
