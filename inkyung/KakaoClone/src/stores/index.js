import FriendStore from './friendStore';
import ChatStore from './chatStore';

class RootStore {
    constructor() {
      this.friendStore = new FriendStore(this);
      this.chatStore = new ChatStore(this);
    }
  }
  
  export default RootStore;
  