import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { useHistory, useLocation } from 'react-router-dom';
import useStores from '../../hooks/useStores';

import PersonIcon from '@material-ui/icons/Person';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';

const Sidebar = observer(() => {
  const { commonStore } = useStores();
  const history = useHistory();
  const location = useLocation();

  const [pathname, setPathname] = useState('');

  useEffect(() => {
    setPathname(location.pathname.split('/')[1]);
  }, [location.pathname]);

  const changeView = (route: string) => {
    commonStore.setCurrentRoute(route);
    if (route === 'friend') history.push('/friend');
    else if (route === 'chatting') history.push('/chatting');
    else if (route === 'more') history.push('/more');
  };

  return (
    <Aside>
      <ControlBtns>
        <ControlBtn style={{ backgroundColor: 'rgb(237, 106, 93)' }} />
        <ControlBtn style={{ backgroundColor: 'rgb(244, 191, 78)' }} />
        <ControlBtn style={{ backgroundColor: 'rgb(97, 197, 84)' }} />
      </ControlBtns>

      <OtherBtns>
        <MenuBtns>
          <MenuBtn>
            <PersonIcon
              style={
                pathname === 'friend' ? { color: '#fff' } : { color: '#999' }
              }
              onClick={() => changeView('friend')}
            />
          </MenuBtn>

          <MenuBtn>
            <ChatBubbleIcon
              style={
                pathname === 'chatting' ? { color: '#fff' } : { color: '#999' }
              }
              onClick={() => changeView('chatting')}
            />
          </MenuBtn>

          <MenuBtn>
            <MoreHorizIcon
              style={
                pathname === 'more' ? { color: '#fff' } : { color: '#999' }
              }
              onClick={() => changeView('more')}
            />
          </MenuBtn>
        </MenuBtns>

        <SettingBtns>
          <SettingBtn>
            <NotificationsIcon />
          </SettingBtn>

          <SettingBtn>
            <SettingsIcon />
          </SettingBtn>
        </SettingBtns>
      </OtherBtns>
    </Aside>
  );
});

const Aside = styled.aside`
  width: 60px;
  height: 100%;
  padding: 0 5px;
  border-radius: 12px 0 0 12px;
  background-color: rgb(64, 54, 48);
`;

const ControlBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 25px;
`;

const ControlBtn = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: white;
`;

const OtherBtns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 610px;

  svg:hover {
    color: #bbb;
  }
`;

const MenuBtns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 150px;
  margin-top: 30px;
`;

const MenuBtn = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  color: #999;
`;

const SettingBtns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100px;
`;

const SettingBtn = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  color: #999;
`;

export default Sidebar;
