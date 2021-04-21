import { useContext } from 'react';
import storeContext from '../stores';

const useStores = () => useContext(storeContext);

export default useStores;