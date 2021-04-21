import { createContext } from 'react';
import CommonStore from './CommonStore';

const storeContext = createContext({
  commonStore: new CommonStore(),
})

export default storeContext;