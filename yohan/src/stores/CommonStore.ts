import { makeAutoObservable } from 'mobx';

class CommonStore {
  constructor() {
    makeAutoObservable(this);
  }

  currentRoute: string = 'friend';

  setCurrentRoute(route: string) {
    this.currentRoute = route;
  }
}

export default CommonStore;