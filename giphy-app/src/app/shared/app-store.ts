import { BehaviorSubject } from "rxjs/BehaviorSubject";
import 'rxjs/rx';

interface State {
  numberOfResults: number
}

const state = {
  numberOfResults: 10
}

const store = new BehaviorSubject<any>(state);

export class AppStore {
  store = store;
  changes = store.asObservable().distinctUntilChanged();

  getState() {
    return this.store.value;
  }

  setState(state: State) {
    this.store.next(state);
  }

}

