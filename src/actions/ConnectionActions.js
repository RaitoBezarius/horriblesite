import alt from 'core/Dispatcher';

@alt.createActions
export default class ConnectionActions {
  constructor() {
    this.generateActions('ready', 'lostConnection');
  }
}
