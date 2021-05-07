import { createContext } from 'react';
import CommonStore from './CommonStore';
import FriendStore from './FriendStore';
import ChattingStore from './ChattingStore';

const storeContext = createContext({
  commonStore: new CommonStore(),
  friendStore: new FriendStore(),
  chattingStore: new ChattingStore()
})

export default storeContext;