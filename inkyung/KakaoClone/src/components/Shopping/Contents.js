import React from "react";
import styled from "styled-components";

class Contents extends React.Component{
    render(){
        return(
            <Frame>
                <Space/>
                <Item>
                    <AdImg>
                        <IMG src='http://www.teazenmall.com/web/product/big/202103/5a05e4785d0784ca263cfb2a59cd2c78.jpg'/>
                    </AdImg>
                    <Info>
                        <Tag>오늘의 건강</Tag>
                        <Title>하루 2포로 건강하게</Title>
                        <Comment>유산균 12종과 프리바이오틱스가 모두 함유되어 있는 건강한 발효음료입니다.</Comment>
                        <Option>티젠 콤부차 10스틱X3박스 (베리, 레몬, 유자 3종 택1)</Option>
                        <Price>
                            <Discount>15%</Discount>
                            <RPrice>17,800원</RPrice>
                        </Price>
                    </Info>
                </Item>
                <Item>
                    <AdImg>
                        <IMG src='https://shopping-phinf.pstatic.net/main_2629780/26297808315.20210309231650.jpg?type=f640'/>
                    </AdImg>
                    <Info>
                        <Tag>오늘의 간식</Tag>
                        <Title>오늘 하루도 달달하게</Title>
                        <Comment>부드럽고 진한 초코맛이 매력적인 비스킷입니다.</Comment>
                        <Option>40gX24입 1박스</Option>
                        <Price>
                            <Discount></Discount>
                            <RPrice>13,890원</RPrice>
                        </Price>
                    </Info>
                </Item>
            </Frame>
        )
    }

}


const Frame = styled.div`
`;

const Space = styled.div`
    background-color: #f0f0f0;
    height: .5em;
`

const Item = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 5%;
    padding-left: 3%;
    padding-right: 3%;
`

const AdImg = styled.div`
    height: 12em;
    background: black;
    border-radius: .2em;
    border: 1px solid #e3e3e3;
`

const IMG = styled.img`
    height: 12em;
    width: 100%;
    object-fit: cover;
`

const Info = styled.div`
    height: 10em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

const Tag = styled.div`
    font-weight: 100;
    width: 4.3em;
    height: .8em;
    font-size: smaller;
    border: 1px solid gray;
    color: gray;
    border-radius: 2em;
    padding-bottom: 2.3%;
    padding-left: 3%;
    padding-right: 3%;
`

const Title = styled.div`

`

const Comment = styled.div`
    font-weight: 100;
`

const Option = styled.div`
    font-weight: 100;
    font-size: smaller;
    color: gray;
`

const Price = styled.div`
    font-weight: 100;
    display: flex;
    flex-direction: row;
`

const Discount = styled.div`
    color: red;
    padding-right: 2%;
`

const RPrice = styled.div`

`

export default Contents;