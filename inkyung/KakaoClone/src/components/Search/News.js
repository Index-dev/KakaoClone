import React from "react";
import styled from "styled-components";

class News extends React.Component{
    render(){
        return(
            <Frame>
                <D><Ncontent>"칠성파 잘안다" 백화점서 조폭 행세하며 수천만원 뜯은 50대 징역</Ncontent></D>
                <D><Ncontent>[더오래]알츠하이머를 앓게 되면 바로 이런 느낌일까?</Ncontent></D>
                <D><Ncontent>"비싸고 안터진다"...5G 집단소송에 혼쭐난 통신사들이 약속한 이것</Ncontent></D>
                <D><Ncontent>"남양유업의 무리수가 빚은 참사"…식품업계가 발칵 뒤집혔다</Ncontent></D>
                <D><Ncontent>'서복' 이틀 연속 1위…누적관객수 8만 돌파</Ncontent></D>
                <NImg>
                    <ContentF>
                    <IMG src="https://imgnews.pstatic.net/image/421/2021/04/17/0005295228_001_20210417121114164.jpg?type=w647">
                    </IMG>
                    <Text>수차례 음주운전, 무면허에 경찰차 추돌까지. 20대 결국 실형</Text>
                    </ContentF>
                    <ContentF>
                    <IMG src="https://imgnews.pstatic.net/image/016/2021/04/17/20210416000775_0_20210417114335687.jpg?type=w647">
                    </IMG>
                    <Text>‘조종 논란’ 서예지 후폭풍. ‘가스라이팅’ 뭐길래 시끌벅적</Text>
                    </ContentF>
                </NImg>
            </Frame>
        )
    }
}

const Frame = styled.div`
    height: 18em;
    padding-left: 3%;
    padding-right: 3%;
    display: flex;
    overflow:hidden;
    flex-direction: column;
    justify-content: space-evenly;
    font-weight: 100;
`

const D = styled.div`
    display: flex; 
    height: 2em;
    align-items: center; 
    border-top: 1px solid #f0f0f0;
`

const Ncontent = styled.div`
    padding-top: 2%;
    height: 1.7em;
    width: 94vw;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
`

const NImg = styled.div`
    height: 8em;
    display: flex;
    justify-content: space-between;
    padding-top: .1em;
`

const ContentF = styled.div`
    overflow: hidden;
`

const IMG = styled.img`
    border-radius: .4em;
    border: 1px solid #f0f0f0;
    height: 5em;
    width: 45vw;
    object-fit: cover;
`

const Text = styled.div`
    height: 2em;
    width: 45vw;
    font-size: smaller;

    display: -webkit-box; 
    word-wrap: break-word; 
    overflow: hidden; 
    text-overflow: ellipsis;
    line-height: 1em;
    -webkit-box-orient: vertical; 
    -webkit-line-clamp: 2; 
`

export default News;