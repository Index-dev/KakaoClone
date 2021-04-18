import FriendStore from './friendStore';

class RootStore {
    constructor() {
      this.friendStore = new FriendStore(this);
    }
  }
  
  export default RootStore;
  