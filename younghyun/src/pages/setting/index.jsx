import styled from "styled-components";
import HeaderNavSection from "components/layout/paddingSection";
import blackhats from "assets/image/blackhats.jpg";

function Setting() {
  return (
    <HeaderNavSection>
      <Container>
        <Title>Setting</Title>
        <ContentContainer>
          <TextContent>메일</TextContent>
          <TextContent>캘린더</TextContent>
          <TextContent>서랍</TextContent>
          <TextContent>이모티콘</TextContent>
          <TextContent>메이커스</TextContent>
          <TextContent>선물하기</TextContent>
          <TextContent>메이커스</TextContent>
          <TextContent>이모티콘</TextContent>
          <TextContent>프렌즈</TextContent>
          <TextContent>쇼핑하기</TextContent>
          <TextContent>스타일</TextContent>
          <TextContent>멜론티켓</TextContent>
          <TextContent>게임</TextContent>
          <TextContent>멜론</TextContent>
          <TextContent>헤어샵</TextContent>
          <TextContent>전체 서비스</TextContent>
        </ContentContainer>
        <PhotoAdvertise />
      </Container>
    </HeaderNavSection>
  );
}
export default Setting;

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

const ContentContainer = styled.div`
  width: 70%;
  padding: 1rem;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;

const TextContent = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 0.7em;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5px;
`;
const PhotoAdvertise = styled.div`
  width: 100%;
  height: 250px;
  background-image: url(${blackhats});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 0.3rem;
`;
