import { createContext } from 'react';
import CommonStore from './CommonStore';
import FriendStore from './FriendStore';

const storeContext = createContext({
  commonStore: new CommonStore(),
  friendStore: new FriendStore()
})

export default storeContext;