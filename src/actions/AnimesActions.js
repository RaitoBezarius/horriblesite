import alt from 'core/Dispatcher';
import Connection from 'core/Connection';

@alt.createActions
export default class AnimesActions {
  constructor() {
    this.generateActions('fetchedAnimes', 'fetchingFailed');
  }

  fetchAnimes() {
    this.dispatch();
    Connection.socket.session.call('horriblesubs.get_latest')
    .then(animes => {
      this.actions.fetchedAnimes(animes);
    })
    .catch(error => {
      this.actions.fetchingFailed(error);
    });
  }
}
