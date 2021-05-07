import React from 'react';
import styled from 'styled-components';

import PersonIcon from '@material-ui/icons/Person';

const Friend = (props: {
  name: string;
  status?: string;
  avatarSettings?: {
    avatarWidth: number;
    avatarHeight: number;
    borderRadius: number;
    iconSize: number;
  };
}) => {
  const {
    avatarWidth,
    avatarHeight,
    borderRadius,
    iconSize,
  } = props.avatarSettings || {
    avatarWidth: 42,
    avatarHeight: 42,
    borderRadius: 17,
    iconSize: 1.8,
  };

  return (
    <FriendDiv>
      <Avatar
        style={{
          width: `${avatarWidth}px`,
          height: `${avatarHeight}px`,
          borderRadius: `${borderRadius}px`,
        }}
      >
        <PersonIcon
          style={{ color: 'rgb(200, 218, 239)', fontSize: `${iconSize}rem` }}
        />
      </Avatar>
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
  padding: 5px 12px;

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
