import React from 'react';
import styled from 'styled-components';

const Friend = (props: { name: string; status?: string }) => {
  return (
    <FriendDiv>
      <Avatar />
      <Names>
        <Nickname>{props.name}</Nickname>
        {props.status && <StatusText>{props.status}</StatusText>}
      </Names>
    </FriendDiv>
  );
};

const FriendDiv = styled.div`
  display: flex;

  margin-top: 10px;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  background-color: lightblue;
`;

const Names = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  padding: 4px 0;
  justify-content: space-around;
`;

const Nickname = styled.div`
  font-weight: bold;
  font-size: 0.9rem;
`;

const StatusText = styled.div`
  font-size: 0.75rem;
  color: #777;
`;

export default Friend;
