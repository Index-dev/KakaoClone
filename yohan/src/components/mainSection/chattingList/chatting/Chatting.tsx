import React from 'react';
import styled from 'styled-components';
import Message from '../../../../model/Message';

const Chatting = (props: {
  chatting: { chatId: number; participants: string[]; messages: Message[] };
}) => {
  const { chatId, participants, messages } = props.chatting;
  const lastTime = messages[messages.length - 1].time;
  let time = `${lastTime.getMonth() + 1}월 ${lastTime.getDate()}일`;

  return (
    <ChattingDiv>
      <Avatar>{participants[0][0]}</Avatar>
      <ChattingInfo>
        <ChattingName>
          {participants.map((participant, index) => {
            if (index !== participants.length - 1) return `${participant}, `;
            else return participant;
          })}
        </ChattingName>
        <ChattingLastMessage>
          {messages[messages.length - 1].message}
        </ChattingLastMessage>
      </ChattingInfo>

      <ChattingTime>{time}</ChattingTime>
    </ChattingDiv>
  );
};

const ChattingDiv = styled.div`
  display: flex;

  margin-top: 10px;
  padding: 12px;

  &:hover {
    background-color: rgb(0, 0, 0, 0.05);
  }
`;

const Avatar = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 17px;
  background-color: rgb(157, 190, 227);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChattingInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  padding: 4px 0;
  justify-content: space-around;
`;

const ChattingName = styled.div`
  font-weight: bold;
  font-size: 0.85rem;
`;

const ChattingLastMessage = styled.div`
  font-size: 0.75rem;
  color: #555;
`;

const ChattingTime = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.7rem;
  color: #999;
`;

export default Chatting;
